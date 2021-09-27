import { Injectable } from '@nestjs/common';
import { Post, PrismaClient, Profile, User } from '@prisma/client';
import { CreatePostInput } from './inputs/create-post-input.interface';
import { CreateProfileInput } from './inputs/create-profile-input.interface';
import { CreateUserInput } from './inputs/create-user-input.interface';
import { PublishPostInput } from './inputs/publish-post-input.interface';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaClient) {}
  getHello(): string {
    return 'Hello Worldz!';
  }
  async getUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    return users;
  }
  async getPosts(): Promise<Post[]> {
    const posts = await this.prisma.post.findMany({
      include: {
        author: true,
      },
    });
    return posts;
  }
  async getProfiles(): Promise<Profile[]> {
    const profiles = await this.prisma.profile.findMany({
      include: {
        user: true,
      },
    });
    return profiles;
  }
  async createUser(input: CreateUserInput): Promise<User | null> {
    const user = await this.prisma.user.create({
      data: {
        ...input,
      },
    });
    return user;
  }
  async createPost(input: CreatePostInput): Promise<Post | null> {
    const post = await this.prisma.post.create({
      data: {
        ...input,
      },
    });
    return post;
  }
  async createProfile(input: CreateProfileInput): Promise<Profile | null> {
    const profile = await this.prisma.profile.create({
      data: {
        ...input,
      },
    });
    return profile;
  }
  async publishPost(input: PublishPostInput): Promise<Post | null> {
    await this.prisma.post
      .update({
        where: {
          id: input.postId,
        },
        data: {
          published: true,
        },
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(JSON.stringify(error), 'error');
      });
    return null;
  }
}
