import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signUp(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.authService.signUp(email, password);
    const token = await this.authService.signIn(email, password);
    return { message: 'User signed in successfully', user, token };
  }
}
