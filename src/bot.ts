import TelegramBot       from 'node-telegram-bot-api'
import { prisma }        from './index'
import {
  compact,
  isNil,
}                        from 'lodash'
import { checkSchedule } from './utils/checkSchedule'
import { delay }         from './utils/utils'



const checkScheduleBot = async ( bot: TelegramBot ) => {
  console.log( 'check start' )
  const check = await checkSchedule()
  console.log( 'check end' )
  if ( check.changed ) {
    console.log( 'Новое расписание!' )
    const chatIds = (await prisma.signed_chats.findMany()).map( obj => obj.id )
    for ( const chatId of chatIds ) bot.sendMessage( chatId, `Новое расписание! ${check.text}` )
  }
  return check.changed
}

export const activateBot = async () => {
  const bot = new TelegramBot( process.env.BOT_TOKEN, { polling: true } )

  bot.setMyCommands( [
    {
      command:     'sign',
      description: 'Подписать канал на обновления',
    },
    {
      command:     'unsign',
      description: 'Отписать канал от обновлений',
    },
    {
      command:     'check',
      description: 'Проверить обновления расписаний',
    },
  ] )

  bot.onText( /^\/check$/, async ( msg, match ) => {
    if ( !await checkScheduleBot( bot ) ) {
      const memory = await prisma.memory.findUnique( { where: { id: 1 } } )
      await bot.sendMessage( msg.chat.id, compact( [ `Без изменений`, memory?.date ] ).join( ', ' ) )
    }
  } )

  bot.onText( /^\/sign$/, async ( msg, match ) => {
    const chat_id = msg.chat.id.toString()
    const founded = await prisma.signed_chats.findUnique( { where: { id: chat_id } } )
    if ( isNil( founded ) ) {
      await prisma.signed_chats.create( { data: { id: chat_id } } )
      await bot.sendMessage( chat_id, `Чат успешно подписан!` )
    } else {
      await bot.sendMessage( chat_id, `Так нельзя, чат уже был подписан.` )
    }
  } )

  bot.onText( /^\/unsign$/, async ( msg, match ) => {
    const chat_id = msg.chat.id.toString()
    const founded = await prisma.signed_chats.findUnique( { where: { id: chat_id } } )
    if ( isNil( founded ) ) {
      await bot.sendMessage( chat_id, `Так нельзя, текущий чат не был подписан.` )
    } else {
      await prisma.signed_chats.delete( { where: { id: chat_id } } )
      await bot.sendMessage( chat_id, `Чат успешно отписан!` )
    }
  } )

  do {
    await checkScheduleBot( bot )
    await delay( 1000 * 60 * 25 )
  } while ( true )
}