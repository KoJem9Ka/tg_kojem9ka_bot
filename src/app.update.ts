import {
  Command,
  Ctx,
  InjectBot,
  Start,
  Update,
} from '@grammyjs/nestjs'
import {
  Bot,
  Context,
} from 'grammy'
import { getJSON } from './infrastructure/utils'
import { SubscribersService } from './prisma/cache/subscribers.service'
import { AdminsService } from './prisma/cache/admins.service'

@Update()
export class AppUpdate {
  constructor(
    private readonly subscribersService: SubscribersService,
    private readonly adminsService: AdminsService,
    @InjectBot() private readonly bot: Bot,
  ) {}

  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply('Привет!')
  }

  @Command('info')
  async info(@Ctx() ctx: Context) {
    await ctx.reply(getJSON(ctx, 2))
  }

  @Command('subscribe')
  async subscribe(@Ctx() ctx: Context) {
    if ( !ctx.chat || !ctx.from )
      return await ctx.reply('Ошибка идентификации чата')
    const isSubscribed = await this.subscribersService.setSubscription(ctx.chat, ctx.from, true)
    await ctx.reply(isSubscribed ? '✅ Успешная подписка' : '🔄 Чат уже был подписан')
  }

  @Command('unsubscribe')
  async unsubscribe(@Ctx() ctx: Context) {
    if ( !ctx.chat || !ctx.from )
      return await ctx.reply('Ошибка идентификации чата')
    const isUnsubscribed = await this.subscribersService.setSubscription(ctx.chat, ctx.from, false)
    await ctx.reply(isUnsubscribed ? '😥 Чат отписан от уведомлений' : '🔄 Чат уже был отписан')
  }

  @Command(process.env.TOP_SECRET || Math.random().toString())
  async owner(@Ctx() ctx: Context) {
    const id = ctx.from!.id
    await Promise.all([
      ctx.api.deleteMessage(ctx.chat!.id, ctx.message!.message_id),
      this.adminsService.giveAdmin({ id }),
      ctx.reply(`${ ctx.from?.username } становится root!`),
    ])
  }
}
