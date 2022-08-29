import TelegramBot          from 'node-telegram-bot-api'
import { delay }            from '../utils/utils'
import { checkScheduleBot } from './methods'



export const bot = new TelegramBot( process.env.BOT_TOKEN, { polling: true } )
require( './handlers' )

void bot.setMyCommands( [
  {
    command:     'file',
    description: '📩 Файл расписания',
  },
  {
    command:     'check',
    description: '👀 Проверить расписание',
  },
  {
    command:     'subscribe',
    description: '✔ Подписка на уведомления',
  },
  {
    command:     'un_subscribe',
    description: '❌ Отписка от уведомлений',
  },
] )


const checkingCycle = async () => {
  while ( 1 ) {
    await checkScheduleBot()
    await delay( 1000 * 60 * 25 )
  }
}
process.env.IS_DEV !== '1' && void checkingCycle()

process.once( 'SIGINT', () => bot.stopPolling() )
process.once( 'SIGTERM', () => bot.stopPolling() )