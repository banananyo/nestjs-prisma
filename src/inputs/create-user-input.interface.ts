import { Post } from "@prisma/client";

export interface CreateUserInput {
    name: string;
    email: string;
}