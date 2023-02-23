import {
  Injectable,
  OnModuleInit,
} from '@nestjs/common'
import { InjectBot } from '@grammyjs/nestjs'
import { Bot } from 'grammy'

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectBot() private readonly bot: Bot,
  ) {
    console.log('Bot starting ', this.bot ? this.bot.botInfo.id : '(booting)')
  }

  async onModuleInit() {
    await this.bot.api.setMyCommands([ {
      command: 'file',
      description: '📩 Файл расписания',
    }, {
      command: 'check',
      description: '👀 Проверить расписание',
    }, {
      command: 'subscribe',
      description: '✔ Подписка на уведомления',
    }, {
      command: 'unsubscribe',
      description: '❌ Отписка от уведомлений',
    } ])
  }
}
