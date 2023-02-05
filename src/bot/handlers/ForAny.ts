import { checkScheduleBot } from '../methods'
import { state }            from '../../index'
import { bot }              from '../bot'
import { botCommand }       from '../utils'
import { scheduleFileName } from '../../utils/utils'



bot.onText( botCommand( 'file' ), async ( msg, match ) => {
  const memory = state.getMemory()
  bot.sendDocument( msg.chat.id, memory?.file_id!, undefined, {
    filename:    scheduleFileName( memory?.date || '' ),
    contentType: 'xls',
  } ).then()
} )

bot.onText( botCommand( 'check' ), async ( msg, match ) => checkScheduleBot( await bot.sendMessage( msg.chat.id, '💬 Проверяю расписание...' ) ) )

bot.onText( botCommand( 'subscribe' ), async ( msg, match ) => {
  const chatId = msg.chat.id
  await state.setSubscribed( chatId, true )
    ? await bot.sendMessage( chatId, `✅ Чат успешно подписан на автоматические уведомления!` )
    : await bot.sendMessage( chatId, `🤓 Ничего не изменилось, чат уже был подписан на уведомления.` )
} )

bot.onText( botCommand( 'un_subscribe' ), async ( msg, match ) => {
  const chatId = msg.chat.id
  await state.setSubscribed( chatId, false )
    ? await bot.sendMessage( chatId, `✅ Чат успешно отписан, теперь вы НЕ будете уведомлены 🤐` )
    : await bot.sendMessage( chatId, `🤓 Ничего не изменилось, чат не был подписан на уведомления.` )
} )