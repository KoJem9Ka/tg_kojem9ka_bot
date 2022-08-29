import { bot }    from '../bot'
import {
  botCommand,
  CTX,
  isAdmin,
  isCTX,
  UserContext,
}                 from '../utils'
import { prisma } from '../../index'
import { sample } from 'lodash'



bot.onText( botCommand( 'clown' ), async ( msg, match ) => {
  const repliedId = msg.reply_to_message?.message_id
  if ( repliedId ) {
    await bot.deleteMessage( msg.chat.id, msg.message_id.toString() ).catch()
    const stickers = (await prisma.sticker_list.findMany( { where: { name: 'clown' } } )).map( sticker => sticker.file_id )
    const sticker = sample( stickers )!
    await bot.sendSticker( msg.chat.id, sticker, { reply_to_message_id: repliedId } )
  }
} )


bot.onText( botCommand( 'add_stickers' ), async ( msg, match ) => {
  if ( !isAdmin( msg.from?.id! ) && !await isCTX( msg.from?.id, UserContext.None ) ) return
  await bot.sendMessage( msg.chat.id, 'Присылайте стикеры для добавления в список\nЗавершение командой /finish' )
  await CTX( msg.from?.id, UserContext.SetStickers )
} )

bot.on( 'sticker', async ( message, metadata ) => {
  if ( !await isCTX( message.from?.id, UserContext.SetStickers ) ) return
  const data = { name: 'clown', file_uniq_id: message.sticker!.file_unique_id, file_id: message.sticker!.file_id }
  const founded = await prisma.sticker_list.findFirst( { where: { ...data, file_id: undefined } } )
  if ( !founded ) {
    await prisma.sticker_list.create( { data } )
    await bot.sendMessage( message.chat.id, 'Стикер добавлен', { reply_to_message_id: message.message_id } )
  } else {
    await bot.sendMessage( message.chat.id, 'Стикер уже есть в списке', { reply_to_message_id: message.message_id } )
  }
} )

bot.onText( botCommand( 'finish' ), async ( msg, match ) => {
  if ( !await isCTX( msg.from?.id, UserContext.SetStickers ) ) return
  await bot.sendMessage( msg.chat.id, 'Добавление стикеров завершено' )
  await CTX( msg.from?.id, UserContext.None )
} )