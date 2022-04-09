import { Injectable } from '@nestjs/common';
import { CreateOnePostArgs } from 'src/@generated/post/create-one-post.args';
import { FindManyPostArgs } from 'src/@generated/post/find-many-post.args';
import { FindUniquePostArgs } from 'src/@generated/post/find-unique-post.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  async findUnique(args: FindUniquePostArgs) {
    return this.prisma.post.findUnique(args);
  }
  async findAll(args: FindManyPostArgs) {
    return this.prisma.post.findMany(args);
  }

  async createPost(args: CreateOnePostArgs) {
    return this.prisma.post.create(args);
  }
}
