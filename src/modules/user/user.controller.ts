import { Controller, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return await this.userService.createUser(email, password);
  }
}
