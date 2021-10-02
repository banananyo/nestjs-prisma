import { Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';

@Resolver('task')
export class TaskResolver {
  
  constructor(private readonly taskService: TaskService) {}
  
  @Query('taskList')
  taskList() {
    return this.taskService.list();
  }
}
