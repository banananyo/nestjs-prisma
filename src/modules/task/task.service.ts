import { Injectable } from '@nestjs/common';
import { InsertTaskInput } from './interfaces/task-input';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async list() {
    return this.taskRepository.findMany();
  }

  async insert(data: InsertTaskInput) {
    return this.taskRepository.insert({
      data,
    });
  }
}
