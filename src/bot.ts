import TelegramBot       from 'node-telegram-bot-api'
import { prisma }        from './index'
import {
  compact,
  isNil,
}                        from 'lodash'
import { checkSchedule } from './utils/checkSchedule'
import { delay }         from './utils/utils'



const checkScheduleBot = async ( bot: TelegramBot ): Promise<string | boolean> => {
  try {
    const check = await checkSchedule()
    if ( check.isChanged ) {
      const chatIds = (await prisma.signed_chats.findMany()).map( obj => obj.id )
      for ( const chatId of chatIds ) bot.sendMessage( chatId, `⚠ Новое расписание! ${check.text}` )
    }
    return check.isChanged
  } catch ( e ) {
    // @ts-ignore
    return 'message' in e ? e.message : e || 'Неизвестная ошибка'
  }
}

export const activateBot = async () => {
  const bot = new TelegramBot( process.env.BOT_TOKEN, { polling: true } )

  await bot.setMyCommands( [
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

  bot.onText( /^\/check(@kojem9ka_bot)?$/, async ( msg, match ) => {
    const chat_id = msg.chat.id
    const message_id = (await bot.sendMessage( chat_id, '💬 Проверяю расписание...' )).message_id
    const check = await checkScheduleBot( bot )
    if ( check === true ) {
      await bot.deleteMessage( chat_id, message_id.toString() )
    } else {
      const memory = await prisma.memory.findUnique( { where: { id: 1 } } )
      await bot.editMessageText( compact( [ `😴 Без изменений`, memory?.date ] ).join( ':\n' ), { chat_id, message_id } )
    }
    if ( typeof check === 'string' )
      await bot.sendMessage( chat_id, `Ошибка: ${check}` )
  } )

  bot.onText( /^\/sign(@kojem9ka_bot)?$/, async ( msg, match ) => {
    const chat_id = msg.chat.id.toString()
    const founded = await prisma.signed_chats.findUnique( { where: { id: chat_id } } )
    if ( isNil( founded ) ) {
      await prisma.signed_chats.create( { data: { id: chat_id } } )
      await bot.sendMessage( chat_id, `✅ Чат успешно подписан на автоматические уведомления!` )
    } else {
      await bot.sendMessage( chat_id, `🤓 Ничего не изменилось, чат уже был подписан на уведомления.` )
    }
  } )

  bot.onText( /^\/unsign(@kojem9ka_bot)?$/, async ( msg, match ) => {
    const chat_id = msg.chat.id.toString()
    const founded = await prisma.signed_chats.findUnique( { where: { id: chat_id } } )
    if ( isNil( founded ) ) {
      await bot.sendMessage( chat_id, `🤓 Ничего не изменилось, чат не был подписан на уведомления.` )
    } else {
      await prisma.signed_chats.delete( { where: { id: chat_id } } )
      await bot.sendMessage( chat_id, `✅ Чат успешно отписан, теперь вы НЕ будете уведомлены 🤐` )
    }
  } )

  do {
    await checkScheduleBot( bot )
    await delay( 1000 * 60 * 25 )
  } while ( true )
}