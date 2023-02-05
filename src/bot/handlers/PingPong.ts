import { bot }     from '../bot'
import { isAdmin } from '../utils'
import { state }   from '../../index'



bot.onText( /^ping$/i, ( msg, match ) => void bot.sendMessage( msg.chat.id, 'Pong!' ) )

bot.onText( /my id/i, ( msg, match ) => void bot.sendMessage( msg.chat.id, `Your id: ${msg.from?.id}` ) )

bot.onText( /is admin/i, async ( msg, match ) => {
  const userId = msg.from?.id!
  state.isAdmin( userId )
    ? await bot.sendMessage( msg.chat.id, `You is admin` )
    : await bot.sendMessage( msg.chat.id, `You not admin` )
} )

