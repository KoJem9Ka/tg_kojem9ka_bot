import { checkScheduleBot } from '../methods'
import { prisma }           from '../../index'
import { isNil }            from 'lodash'
import { bot }              from '../bot'
import { botCommand }       from '../utils'
import { scheduleFileName } from '../../utils/utils'



bot.onText( botCommand( 'file' ), async ( msg, match ) => {
  const memory = await prisma.memory.findUnique( { where: { id: 1 } } )
  bot.sendDocument( msg.chat.id, memory?.file_id!, undefined, {
    filename:    scheduleFileName( memory?.date || '' ),
    contentType: 'xls',
  } ).then()
} )

bot.onText( botCommand( 'check' ), async ( msg, match ) => checkScheduleBot( await bot.sendMessage( msg.chat.id, '💬 Проверяю расписание...' ) ) )

bot.onText( botCommand( 'subscribe' ), async ( msg, match ) => {
  const chat_id = msg.chat.id.toString()
  const founded = await prisma.subscribed_chat.findUnique( { where: { id: chat_id } } )
  if ( isNil( founded ) ) {
    await prisma.subscribed_chat.create( { data: { id: chat_id } } )
    await bot.sendMessage( chat_id, `✅ Чат успешно подписан на автоматические уведомления!` )
  } else {
    await bot.sendMessage( chat_id, `🤓 Ничего не изменилось, чат уже был подписан на уведомления.` )
  }
} )

bot.onText( botCommand( 'un_subscribe' ), async ( msg, match ) => {
  const chat_id = msg.chat.id.toString()
  const founded = await prisma.subscribed_chat.findUnique( { where: { id: chat_id } } )
  if ( isNil( founded ) ) {
    await bot.sendMessage( chat_id, `🤓 Ничего не изменилось, чат не был подписан на уведомления.` )
  } else {
    await prisma.subscribed_chat.delete( { where: { id: chat_id } } )
    await bot.sendMessage( chat_id, `✅ Чат успешно отписан, теперь вы НЕ будете уведомлены 🤐` )
  }
} )