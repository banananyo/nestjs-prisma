import { Prisma, PrismaClient } from '.prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends PrismaClient {
  findMany() {
    return this.user.findMany();
  }

  insert(user: Prisma.UserCreateArgs) {
    return this.user.create(user);
  }
}
