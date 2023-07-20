import { Controller, Body, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signUp(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    const user = await this.authService.signUp(email, password);
    const token = await this.authService.signIn(email, password);
    res.set('Authorization', 'Bearer ' + token);
    res.send({ message: 'User signed in successfully', user, token });
  }
}
