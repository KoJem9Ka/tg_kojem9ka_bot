import {
  Injectable,
  OnModuleInit,
} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import {
  Chat,
  User,
} from 'grammy/out/types'
import { compact } from 'lodash'
import { TSubscribedChat } from '../types'

@Injectable()
export class SubscribersService implements OnModuleInit {
  private _subscribersArray = new Array<TSubscribedChat>()

  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async onModuleInit() {
    this._subscribersArray = await this.prisma.subscribed_chat.findMany()
  }

  get subscribers() {
    return this._subscribersArray
  }

  public async setSubscription(chat: Chat, user: User, is_active: boolean): Promise<boolean> {
    if ( this._subscribersArray.find(sub => sub.id === BigInt(chat.id))?.is_active === is_active )
      return false
    const initiator = compact([ user.last_name, user.first_name, user.username ]).join('_;_')
    const chat_name = chat.type === 'private' ? initiator : chat.title
    await this.prisma.subscribed_chat.upsert({
      where: { id: chat.id },
      create: { id: chat.id, chat_name, user: initiator, is_active },
      update: { id: chat.id, chat_name, user: initiator, is_active },
    })
    this._subscribersArray = await this.prisma.subscribed_chat.findMany()
    return true
  }
}
