import { Post } from '@nestjs/common';
import {
  Args,
  Resolver,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Comment } from 'src/@generated/comment/comment.model';
import { FindManyCommentArgs } from 'src/@generated/comment/find-many-comment.args';
import { FindManyPostArgs } from 'src/@generated/post/find-many-post.args';
import { CreateOneUserArgs } from 'src/@generated/user/create-one-user.args';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';
import { FindUniqueUserArgs } from 'src/@generated/user/find-unique-user.args';
import { UpdateOneUserArgs } from 'src/@generated/user/update-one-user.args';
import { UserCount } from 'src/@generated/user/user-count.output';
import { User } from 'src/@generated/user/user.model';
import { CommentService } from 'src/services/comment/comment.service';
import { PostsService } from 'src/services/posts/posts.service';
import { UsersService } from 'src/services/users/users.service';

@Resolver(User)
export class UsersResolver {
  constructor(
    private userService: UsersService,
    private postService: PostsService,
    private commnentService: CommentService,
  ) {}

  @Query(() => User, { nullable: true })
  user(@Args() args: FindUniqueUserArgs) {
    return this.userService.findUnique(args);
  }

  @Query(() => [User], { nullable: 'items' })
  users(@Args() args: FindManyUserArgs) {
    return this.userService.findAll(args);
  }

  @ResolveField(() => [Post])
  posts(@Parent() user: User, @Args() args: FindManyPostArgs) {
    const { id } = user;
    return this.postService.findAll({
      ...args,
      where: {
        ...args.where,
        userId: {
          equals: id,
        },
      },
    });
  }

  @ResolveField(() => [Comment])
  comments(@Parent() user: User, @Args() args: FindManyCommentArgs) {
    return this.commnentService.findAll({
      ...args,
      where: { ...args.where, userId: { equals: user.id } },
    });
  }

  @ResolveField(() => UserCount)
  async _count(@Parent() user: User) {
    const { id } = user;
    return this.userService._count({
      where: {
        id,
      },
    });
  }

  @Mutation(() => User)
  createUser(@Args() args: CreateOneUserArgs) {
    return this.userService.createUser(args);
  }

  @Mutation(() => User)
  updateUser(@Args() args: UpdateOneUserArgs) {
    return this.userService.updateUser(args);
  }
}
