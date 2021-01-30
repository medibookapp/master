import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { LoginRqDto, LoginRsDto, RegisterRqDto, RegisterRsDto } from '@dto';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('data')
  getit() {
    return { alma: "béla"};
  }

  @Post('login')
  login(@Body() message: LoginRqDto): LoginRsDto {
    console.log(message);
    let user = this.appService.findUser(message);
    if (user != null) {
      return { success: true, isDoctor: user.ssn[0] == '9'};
    } else {
      return { success: false, isDoctor: false };
    }
  }

  @Post('register')
  register(@Body() message: RegisterRqDto ): RegisterRsDto {
    console.log(message);
    return { success: this.appService.saveRegistration(message) };
  }

}
