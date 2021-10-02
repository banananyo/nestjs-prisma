import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from '@prisma/client';
import { InsertTaskInput } from './interfaces/task-input';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('list')
  async list(): Promise<Task[]> {
    return this.taskService.list();
  }

  @Post('insert')
  async insert(@Body() data: InsertTaskInput): Promise<Task> {
    return this.taskService.insert(data);
  }
}
