import { Injectable } from '@nestjs/common';
import { CreateOneCommentArgs } from 'src/@generated/comment/create-one-comment.args';
import { FindManyCommentArgs } from 'src/@generated/comment/find-many-comment.args';
import { FindUniqueCommentArgs } from 'src/@generated/comment/find-unique-comment.args';
import { UpdateOneCommentArgs } from 'src/@generated/comment/update-one-comment.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentService {
  constructor(readonly prisma: PrismaService) {}

  async findUnique(args: FindUniqueCommentArgs) {
    return this.prisma.comment.findUnique(args);
  }

  async findAll(args: FindManyCommentArgs) {
    return this.prisma.comment.findMany(args);
  }

  async createComment(args: CreateOneCommentArgs) {
    return this.prisma.comment.create(args);
  }

  async updateComment(args: UpdateOneCommentArgs) {
    return this.prisma.comment.update(args);
  }
}
