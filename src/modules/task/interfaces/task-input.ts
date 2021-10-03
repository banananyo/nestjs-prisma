import { TaskStatus } from '@prisma/client';

export interface InsertTaskInput {
  title: string;
}

export interface EditTaskInput {
  id: number;
  title?: string;
  description?: string;
  status?: TaskStatus;
}

export interface DeleteTaskInput {
  id: number;
}

export interface FindOneTaskInput {
  id: number;
}
