import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from './prisma.service';
import { join } from 'path';
import { UsersService } from './services/users/users.service';
import { PostsService } from './services/posts/posts.service';
import { UsersResolver } from './resolvers/users/users.resolver';
import { PostsResolver } from './resolvers/posts/posts.resolver';
import { CommentService } from './services/comment/comment.service';
import { CommentResolver } from './resolvers/comment/comment.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    UsersService,
    PostsService,
    UsersResolver,
    PostsResolver,
    CommentService,
    CommentResolver,
  ],
})
export class AppModule {}
