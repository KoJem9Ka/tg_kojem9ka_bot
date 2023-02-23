import {
  Global,
  Module,
} from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { MemoryService } from './cache/memory.service'
import { AdminsService } from './cache/admins.service'
import { SubscribersService } from './cache/subscribers.service'

@Global()
@Module({
  providers: [
    PrismaService,
    MemoryService,
    AdminsService,
    SubscribersService,
  ],
  exports: [
    MemoryService,
    AdminsService,
    SubscribersService,
  ],
})
export class PrismaModule {
}
