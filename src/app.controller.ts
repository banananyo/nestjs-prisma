import { Body, Controller, Get, Patch, Post as PostMethod } from '@nestjs/common';
import { Post, Profile, User } from '@prisma/client';
import { AppService } from './app.service';
import { CreatePostInput } from './inputs/create-post-input.interface';
import { CreateProfileInput } from './inputs/create-profile-input.interface';
import { CreateUserInput } from './inputs/create-user-input.interface';
import { PublishPostInput } from './inputs/publish-post-input.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  async getUsers(): Promise<User[]> {
    return this.appService.getUsers();
  }

  @Get('posts')
  async getPosts(): Promise<Post[]> {
    return this.appService.getPosts();
  }

  @Get('profiles')
  async getProfiles(): Promise<Profile[]> {
    return this.appService.getProfiles();
  }

  @PostMethod('user')
  async createUser(@Body() input: CreateUserInput): Promise<User | null> {
    return this.appService.createUser(input);
  }

  @PostMethod('post')
  async createPost(@Body() input: CreatePostInput): Promise<Post | null> {
    return this.appService.createPost(input);
  }

  @PostMethod('profile')
  async createProfile(@Body() input: CreateProfileInput): Promise<Profile | null> {
    return this.appService.createProfile(input);
  }

  @Patch('post/publish')
  async publishPost(@Body() input: PublishPostInput): Promise<Post | null> {
    return this.appService.publishPost(input);
  }
}
