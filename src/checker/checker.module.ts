import { Module } from '@nestjs/common'
import { CheckerService } from './checker.service'
import { CheckerUpdate } from './checker.update'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [
    PrismaModule,
  ],
  providers: [
    CheckerService,
    CheckerUpdate,
  ],
  exports: [
    CheckerService,
  ],
})
export class CheckerModule {
}
