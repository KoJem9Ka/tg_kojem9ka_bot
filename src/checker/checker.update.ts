import {
  Command,
  Ctx,
  InjectBot,
  Update,
} from '@grammyjs/nestjs'
import {
  Bot,
  Context,
} from 'grammy'
import { CheckerService } from './checker.service'
import { MemoryService } from '../prisma/cache/memory.service'

@Update()
export class CheckerUpdate {
  constructor(
    private readonly checkerService: CheckerService,
    private readonly memoryService: MemoryService,
    @InjectBot() private readonly bot: Bot,
  ) {
  }

  @Command('check')
  async check(
    @Ctx() ctx: Context,
  ) {
    await this.checkerService.checkForce(ctx)
  }

  @Command('file')
  async file(
    @Ctx() ctx: Context,
  ) {
    const fileId = this.memoryService.last?.file_id
    if ( !fileId )
      await ctx.reply('К сожалению у меня нет файла с расписанием, чтобы отправить его вам...')
    else
      await ctx.replyWithDocument(fileId)
  }
}
