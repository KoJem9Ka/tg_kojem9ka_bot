import TelegramBot from 'node-telegram-bot-api'
import { prisma }  from './index'
import { isNil }   from 'lodash'
import { checkSchedule } from './utils/checkSchedule'
import { delay }         from './utils/utils'



export const activateBot = async () => {
  const bot = new TelegramBot( process.env.BOT_TOKEN, { polling: true } )

  bot.onText( /^\/check$/, ( msg, match ) => {
    void bot.sendMessage( msg.chat.id, `${msg.chat.id}` )
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
    console.log( 'check start' )
    const check = await checkSchedule()
    console.log( 'check end' )
    if ( check.changed ) {
      console.log( 'Новое расписание!' )
      const chatIds = (await prisma.signed_chats.findMany()).map( obj => obj.id )
      for ( const chatId of chatIds ) bot.sendMessage( chatId, `Новое расписание! ${check.text}` )
    }
    await delay( 1000 * 60 * 25 )
    // await delay( 3000 )
  } while ( true )
}