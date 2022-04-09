import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { Post } from './models/post.model';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private prisma: PrismaService) {}

  @Query((returns) => [Post])
  async posts() {
    return this.prisma.post.findMany();
  }

  @Mutation((returns) => Post)
  async createPost(@Args('content') content: string) {
    return this.prisma.post.create({
      data: {
        content: content,
      },
    });
  }
}
