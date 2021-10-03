import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteTaskInput, EditTaskInput, FindOneTaskInput, InsertTaskInput } from './interfaces/task-input';
import { TaskService } from './task.service';

@Resolver('Task')
export class TaskResolver {
  
  constructor(private readonly taskService: TaskService) {}
  
  @Query('taskList')
  taskList() {
    return this.taskService.list();
  }

  @Query('task')
  task(@Args('input') input: FindOneTaskInput) {
    return this.taskService.findOne(input);
  }

  @Mutation('insertTask')
  insertTask(@Args('input') input: InsertTaskInput) {
    return this.taskService.insert(input);
  }

  @Mutation('editTask')
  editTask(@Args('input') input: EditTaskInput) {
    return this.taskService.edit(input)
  }

  @Mutation('deleteTask')
  deleteTask(@Args('input') input: DeleteTaskInput) {
    return this.taskService.delete(input)
  }
}
