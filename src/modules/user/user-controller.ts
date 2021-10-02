import { User } from '.prisma/client';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { InsertUserInput } from './interfaces/user-input';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {

  }

  @Get('list')
  async list(): Promise<User[]> {
    return this.userService.list();
  }

  @Post('insert')
  async insert(@Body() data: InsertUserInput): Promise<User> {
    return this.userService.insert(data);
  }
}
