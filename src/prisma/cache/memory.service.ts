import {
  Injectable,
  OnModuleInit,
} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { TMemory } from '../types'
import { SetOptional } from 'type-fest'

@Injectable()
export class MemoryService implements OnModuleInit {
  private _last = <TMemory | null>null
  private _prev = <TMemory | null>null

  constructor(private readonly prisma: PrismaService) {
  }

  async onModuleInit() {
    [ this._last, this._prev ] = await this.prisma.schedule_memory.findMany({
      orderBy: { date: 'desc' },
      take: 2,
    })
  }

  get last() {
    return this._last
  }

  get prev() {
    return this._prev
  }

  public async update(_next: SetOptional<TMemory, 'checkedAt'>) {
    this._prev = this._last
    this._last = await this.prisma.schedule_memory.upsert({
      where: { date: _next.date },
      update: _next,
      create: _next,
    })
  }

  public async updateCheckedAt() {
    if ( !this.last ) return
    this._last = await this.prisma.schedule_memory.update({
      where: { date: this.last.date },
      data: { checkedAt: new Date() },
    })
  }
}
