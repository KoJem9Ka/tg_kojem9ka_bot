import 'dotenv/config'
import {
  Module,
  OnModuleInit,
} from '@nestjs/common'
import { AppController } from './app.controller'
import { AppUpdate } from './app.update'
import { CheckerModule } from './checker/checker.module'
import { PrismaModule } from './prisma/prisma.module'
import {
  InjectBot,
  NestjsGrammyModule,
} from '@grammyjs/nestjs'
import { AppService } from './app.service'
import { Bot } from 'grammy'
import { AdminsService } from './prisma/cache/admins.service'

@Module({
  imports: [
    PrismaModule,
    NestjsGrammyModule.forRoot({
      token: process.env.BOT_TOKEN,
      options: {},
      pollingOptions: {},
    }),
    CheckerModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppUpdate,
    AppService,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(
    @InjectBot() private readonly bot: Bot,
    private readonly adminsService: AdminsService,
  ) {
  }

  onModuleInit(): any {
    this.bot.catch(async error => {
      await Promise.all(
        this.adminsService.admins.map(async admin => this.bot.api.sendMessage(admin.id, error.message)),
      )
    })
  }
}
