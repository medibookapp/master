import { LoginRqDto, LoginRsDto, RegisterRqDto } from '@dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  profiles: RegisterRqDto[] = [
    { 
      birthDate: '1980-01-01',
      email: 'email@email.hu',
      password: '1',
      ssn: '1'
    },
    { 
      birthDate: '1980-02-01',
      email: 'email2@email.hu',
      password: '2',
      ssn: '2'
    },
    { 
      birthDate: '1980-03-01',
      email: 'email3@email.hu',
      password: '3',
      ssn: '3'
    },
    { 
      birthDate: '1980-09-01',
      email: 'email9@email.hu',
      password: '9',
      ssn: '9'
    },
  ];

  getData(): { message: string } {
    return { message: 'Welcome to medibook-server!' };
  }

  findUser(data: LoginRqDto): RegisterRqDto {
    return this.profiles.find(p => p.email == data.email && p.password == data.password);
  }

  saveRegistration(data: RegisterRqDto): boolean {
    if (this.profiles.find(p => p.email == data.email)) {
      return false;
    } else {
      this.profiles.push(data);
      return true;
    }
    
  }
}
