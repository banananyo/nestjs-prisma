import { Injectable } from '@nestjs/common';
import { InsertUserInput } from './interfaces/user-input';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async list() {
    return this.userRepository.findMany();
  }

  async insert(data: InsertUserInput) {
    return this.userRepository.insert({
      data,
    });
  }
}
