import {
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common'
import { AxiosError } from 'axios'
import assert from 'assert'
import parse from 'node-html-parser'
import { InjectBot } from '@grammyjs/nestjs'
import {
  Bot,
  Context,
  InputFile,
} from 'grammy'
import dayjs from 'dayjs'
import {
  compact,
  round,
} from 'lodash'
import { MemoryService } from '../prisma/cache/memory.service'
import { AdminsService } from '../prisma/cache/admins.service'
import { SubscribersService } from '../prisma/cache/subscribers.service'
import axiosClient from '../infrastructure/axiosClient'
import { _throw } from '../common/catch'
import ms from 'ms'

type TMemoryBasics = {
  date: Date
  url: string
}

@Injectable()
export class CheckerService implements OnModuleInit {
  private timerId?: NodeJS.Timer
  private readonly LIMIT = ms('1m')
  private readonly TIMER_INTERVAL = ms('25m')
  private readonly link = 'https://www.vstu.ru/student/raspisaniya/zanyatiy/index.php?dep=fevt'

  constructor(
    private readonly memoryService: MemoryService,
    private readonly adminsService: AdminsService,
    private readonly subscribersService: SubscribersService,
    @InjectBot() private readonly bot: Bot,
  ) {
  }

  async onModuleInit() {
    setTimeout(this.check, ms('3s'))
    this.timerId = setInterval(this.check, this.TIMER_INTERVAL)
  }

  public async checkForce(ctx: Context) {
    const secondsGone = Date.now() - (this.memoryService.last?.checkedAt.getTime() || 0)
    if ( this.memoryService.last && secondsGone <= this.LIMIT ) {
      // await ctx.reply(`⛔ Расписание было недавно проверено. Повторите через: ${ round((this.LIMIT - secondsGone) / 1000) } сек.`)
      await ctx.reply(`⛔ Расписание было недавно проверено.\nПовторите через: ${ ms(this.LIMIT - secondsGone) }`)
      return
    }
    const msg1 = await ctx.reply('⌛ Проверяю расписание...')
    try {
      if ( await this.check() )
        await this.bot.api.deleteMessage(msg1.chat.id, msg1.message_id)
      else
        await this.bot.api.editMessageText(msg1.chat.id, msg1.message_id, '😴 Без изменений')
    } catch ( err: any ) {
      await this.bot.api.editMessageText(msg1.chat.id, msg1.message_id, `❌ Произошла ошибка: ${ err.message }`)
      throw err
    }
  }

  private readonly check = async () => {
    const next = await this.getUrlAndDate()
    await this.memoryService.updateCheckedAt()
    if ( this.memoryService.last?.date.getTime() === next.date.getTime() )
      return false
    await this.updateMemory(next)
    await this.notifySubscribers()
    return true
  }

  private async updateMemory({ date, url }: TMemoryBasics) {
    const admin = this.adminsService.admins.at(0)
    assert(admin, new NotFoundException('В БД не найдено ни одного администратора.'))
    const msg = await this.bot.api.sendDocument(admin.id, new InputFile(
      { url },
      dayjs(date).format('[Расписание] YYYY-MM-DD HH-mm-ss[.xls]'),
    ))
    await Promise.all([
      this.bot.api.deleteMessage(msg.chat.id, msg.message_id).catch(_throw('Не удалось удалить сообщение')),
      this.memoryService.update({ url, file_id: msg.document.file_id, date }).catch(_throw('Не удалось обновить расписание')),
    ])
  }

  private async notifySubscribers() {
    const { last, prev } = this.memoryService
    assert(last, new NotFoundException('Дата последнего расписания не найдена'))
    const admin = this.adminsService.admins.at(0)
    assert(admin, new NotFoundException('В БД не найдено ни одного администратора.'))

    const caption = compact([ '⚡ Новое расписание ⚡',
      prev?.date && `${ dayjs(prev.date).format('[↙️] DD.MM.YYYY HH:mm:ss [↘️]') }`,
      // prev?.date && 'ᅠᅠᅠᅠ⬇',
      dayjs(last.date).format('[↘️] DD.MM.YYYY HH:mm:ss [↙️]'),
    ]).join('\n')
    await Promise.all(Array.from(this.subscribersService.subscribers).map(async sub => {
      return this.bot.api.sendDocument(sub.id.toString(), last.file_id, { caption })
    }))
  }

  private async getUrlAndDate(): Promise<TMemoryBasics> {
    const html = await axiosClient.get<string>(this.link).then(res => res.data).catch((e: AxiosError<string>) => e)
    if ( typeof html !== 'string' ) throw new Error(`Не удалось загрузить html код страницы: ${ html.message }`)
    const liArray = parse(html).querySelectorAll('.content > ul:nth-child(3) > li')
    assert(liArray.length, new Error('Не удалось получить список со страницы'))
    const liElem = liArray.find(liElem0 => liElem0.text.includes('3 курс'))
    assert(liElem, new Error('Не удалось найти нужный элемент в списке'))
    const dateArray = liElem.text.match(/(\d{4})\D+(\d{2})\D+(\d{2})\D+(\d{2})\D+(\d{2})\D+(\d{2})/)?.slice(1)
    assert(dateArray?.length === 6, new Error('Не удалось извлечь дату из текста элемента списка'))
    const [ year, month, day, hour, minute, second ] = dateArray.map(x => +x)
    const url = liElem.querySelector('a')?.getAttribute('href')?.replace(/.*?upload/, 'https://www.vstu.ru/upload')
    assert(url, new Error('Не удалось извлечь ссылку на файл'))
    return {
      date: new Date(year, month - 1, day, hour, minute, second),
      url: encodeURI(url),
    }
  }
}
