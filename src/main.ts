import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { PrismaService } from './prisma/prisma.service'


async function bootstrap() {
  const app = await NestFactory
    .create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)
  await app.listen(3000, '0.0.0.0')
}

bootstrap()
