import { bot }   from '../bot'
import {
  botCommand,
  UserContext,
}                from '../utils'
import { state } from '../../index'



bot.onText( botCommand( 'clown' ), async ( msg, match ) => {
  const repliedMessageId = msg.reply_to_message?.message_id
  const sticker = state.randomStickerId()
  if ( repliedMessageId && sticker ) {
    await bot.deleteMessage( msg.chat.id, msg.message_id.toString() ).catch( () => undefined )
    await bot.sendSticker( msg.chat.id, sticker, { reply_to_message_id: repliedMessageId } )
  }
} )

bot.onText( botCommand( 'add_stickers' ), async ( msg, match ) => {
  const userId = msg.from?.id
  if ( state.notAdmin( userId ) || state.notContext( userId, UserContext.None ) ) return
  await bot.sendMessage( msg.chat.id, 'Присылайте стикеры для добавления в список\nЗавершение командой /finish' )
  await state.setContext( userId, UserContext.SetStickers )
} )

bot.on( 'sticker', async ( message, metadata ) => {
  if ( state.notContext( message.from?.id, UserContext.SetStickers ) || !message.sticker ) return
  await state.addSticker( { name: 'clown', file_uniq_id: message.sticker.file_unique_id, file_id: message.sticker.file_id } )
    ? await bot.sendMessage( message.chat.id, 'Стикер добавлен', { reply_to_message_id: message.message_id } )
    : await bot.sendMessage( message.chat.id, 'Стикер уже есть в списке', { reply_to_message_id: message.message_id } )
} )

bot.onText( botCommand( 'finish' ), async ( msg, match ) => {
  if ( state.notContext( msg.from?.id, UserContext.SetStickers ) ) return
  await bot.sendMessage( msg.chat.id, 'Добавление стикеров завершено' )
  await state.setContext( msg.from?.id, UserContext.None )
} )