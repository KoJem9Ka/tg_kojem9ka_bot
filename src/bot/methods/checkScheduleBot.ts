import { Message }          from 'node-telegram-bot-api'
import { fetchSchedule }    from './fetchSchedule'
import {
  prisma,
  state,
} from '../../index'
import { bot }              from '../bot'
import {
  compact,
  isNil,
}                           from 'lodash'
import { scheduleFileName } from '../../utils/utils'



export const checkScheduleBot = async ( msg?: Message ): Promise<void> => {
  try {
    const check = await fetchSchedule()
    const memory = await state.getMemory()
    if ( check.isChanged ) {
      if ( msg ) bot.deleteMessage( msg.chat.id, msg.message_id.toString() ).catch( () => undefined )
      const subscribedIds = (await prisma.subscribed_chat.findMany()).map( obj => obj.id )
      for ( const chatId of subscribedIds ) bot.sendDocument( chatId, memory?.file_id!, { caption: `⚠ Новое расписание!\n${check.text}` }, {
        filename:    scheduleFileName( memory?.date || '' ),
        contentType: 'xls',
      } ).then()
    } else {
      msg && await bot.editMessageText( compact( [ `😴 Без изменений`, memory?.date ] ).join( ':\n' ), { chat_id: msg?.chat.id, message_id: msg?.message_id } )
    }
  } catch ( e ) {
    // @ts-ignore
    const errMsg = typeof e === 'string' ? e : !isNil( e.message ) ? e.message : 'Unknown error'
    const errorText2 = `Error: ${errMsg}`
    if ( msg ) bot.editMessageText( errorText2, { chat_id: msg.chat.id, message_id: msg.message_id } ).then()
    const adminIds = (await prisma.admin.findMany()).map( el => el.id )
    console.log( msg?.chat.id )
    for ( const adminId of adminIds ) msg?.chat.id !== adminId && bot.sendMessage( adminId, errorText2 ).then()
    console.log( errorText2 )
  }
}