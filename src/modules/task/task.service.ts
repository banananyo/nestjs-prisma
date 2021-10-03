import { Injectable } from '@nestjs/common';
import { DeleteTaskInput, EditTaskInput, FindOneTaskInput, InsertTaskInput } from './interfaces/task-input';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async list() {
    return this.taskRepository.findMany();
  }

  async findOne(input: FindOneTaskInput) {
    return this.taskRepository.findOne({
      where: {
        ...input
      }
    });
  }

  async insert(input: InsertTaskInput) {
    return this.taskRepository.insert({
      data: { ...input },
    });
  }

  async edit(input: EditTaskInput) {
    const { id, ...data } = input;
    return this.taskRepository.edit({ where: { id }, data });
  }

  async delete(input: DeleteTaskInput) {
    const { id } = input;
    return this.taskRepository.delete({ where: { id }})
  }
}
