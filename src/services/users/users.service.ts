import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';
import { CreateOneUserArgs } from 'src/@generated/user/create-one-user.args';
import { FindUniqueUserArgs } from 'src/@generated/user/find-unique-user.args';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUnique(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args);
  }

  async findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  async _count(args: FindUniqueUserArgs) {
    const data = await this.prisma.user.findUnique({
      ...args,
      select: {
        _count: {
          select: {
            posts: true,
          },
        },
      },
    });
    return data._count;
  }

  async createUser(args: CreateOneUserArgs) {
    return this.prisma.user.create(args);
  }
}
