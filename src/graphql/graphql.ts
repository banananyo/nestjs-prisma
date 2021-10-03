
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum TaskStatus {
    TODO = "TODO",
    DOING = "DOING",
    CANCEL = "CANCEL",
    SUCCESS = "SUCCESS"
}

export interface InsertTaskInput {
    title: string;
}

export interface EditTaskInput {
    title?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<TaskStatus>;
}

export interface Task {
    id?: Nullable<number>;
    title?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<TaskStatus>;
}

export interface IQuery {
    taskList(): Nullable<Nullable<Task>[]> | Promise<Nullable<Nullable<Task>[]>>;
}

export interface IMutation {
    insertTask(input: InsertTaskInput): Task | Promise<Task>;
    editTask(input: EditTaskInput): Task | Promise<Task>;
}

type Nullable<T> = T | null;
