import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  signup(signupDto: SignupDto) {
    return 'This action does signup';
  }

  login(loginDto: LoginDto) {
    return 'This action does login';
  }
}
