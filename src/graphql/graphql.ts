
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

export interface Task {
    id?: Nullable<number>;
    title?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<TaskStatus>;
}

export interface IQuery {
    taskList(): Nullable<Nullable<Task>[]> | Promise<Nullable<Nullable<Task>[]>>;
}

type Nullable<T> = T | null;
