import { Injectable } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class TaskRepository extends PrismaClient {
  findMany() {
    return this.task.findMany();
  }

  findOne(task: Prisma.TaskFindUniqueArgs) {
    return this.task.findUnique(task)
  }

  insert(task: Prisma.TaskCreateArgs) {
    return this.task.create(task);
  }

  edit(task: Prisma.TaskUpdateArgs) {
    return this.task.update(task)
  }

  delete(task: Prisma.TaskDeleteArgs) {
    return this.task.delete(task)
  }
}
