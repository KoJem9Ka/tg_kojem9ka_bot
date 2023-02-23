import {
  Injectable,
  OnModuleInit,
} from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { TAdmin } from '../types'

@Injectable()
export class AdminsService implements OnModuleInit {
  private _adminsArray = new Array<TAdmin>()
  private _adminsSet = new Set<number>()

  constructor(private readonly prisma: PrismaService) {
  }

  async onModuleInit() {
    this._adminsArray = await this.prisma.admin.findMany()
    this._adminsSet = new Set(this._adminsArray.map(a => a.id))
  }

  public isAdmin(id: number) {
    return this._adminsSet.has(id)
  }

  public get admins() {
    return this._adminsArray
  }

  public async giveAdmin(admin: TAdmin) {
    if ( !this._adminsSet.has(admin.id) ) {
      this._adminsSet.add(admin.id)
      this._adminsArray.push(admin)
      await this.prisma.admin.upsert({
        where: { id: admin.id },
        create: admin,
        update: admin,
      })
    }
  }

  public async takeAdmin(id: number) {
    this._adminsSet.delete(id)
    this._adminsArray = this._adminsArray.filter(a => a.id !== id)
    await this.prisma.admin.delete({ where: { id } })
  }
}
