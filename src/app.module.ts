import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      typePaths: ['**/**/**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    TaskModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaClient],
})
export class AppModule {}
