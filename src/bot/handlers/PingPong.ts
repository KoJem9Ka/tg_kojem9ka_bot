import { bot }     from '../bot'
import { isAdmin } from '../utils'



bot.onText( /^ping$/i, ( msg, match ) => void bot.sendMessage( msg.chat.id, 'Pong!' ) )

bot.onText( /my id/i, ( msg, match ) => void bot.sendMessage( msg.chat.id, `Your id: ${msg.from?.id}` ) )

bot.onText( /is admin/i, async ( msg, match ) => {
  const userId = msg.from?.id!
  if ( await isAdmin( userId ) ) bot.sendMessage( msg.chat.id, `You is admin` )
} )

