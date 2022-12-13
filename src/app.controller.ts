import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}
//controller daxilinde yazdigimiz  base pathdi
//localhost:3010/user/getbyid

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('users')
  getUser():string {
    return 'sakina';
  }

  
}
