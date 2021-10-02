import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class TaskRepository extends PrismaClient {
  findMany() {
    return this.task.findMany();
  }

  insert(task: Prisma.TaskCreateArgs) {
    return this.task.create(task);
  }
}
