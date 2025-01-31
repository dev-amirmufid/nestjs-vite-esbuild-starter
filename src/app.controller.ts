import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/random')
  getRandom(): string {
    return `${import.meta.env.VITE_APP_TITLE} ok ${process.env.VITE_APP_TITLE}`;
  }
}
