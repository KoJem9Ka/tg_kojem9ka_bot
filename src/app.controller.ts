import {
  Controller,
  Get,
  Post,
} from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  root() {
    return 'Telegram kojem9ka bot works!'
  }
}
