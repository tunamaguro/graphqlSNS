import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateOnePostArgs } from 'src/@generated/post/create-one-post.args';
import { FindManyPostArgs } from 'src/@generated/post/find-many-post.args';
import { FindUniquePostArgs } from 'src/@generated/post/find-unique-post.args';
import { Post } from 'src/@generated/post/post.model';
import { UpdateOnePostArgs } from 'src/@generated/post/update-one-post.args';
import { PostsService } from 'src/services/posts/posts.service';
import { UsersService } from 'src/services/users/users.service';

@Resolver(Post)
export class PostsResolver {
  constructor(
    private postService: PostsService,
    private userService: UsersService,
  ) {}

  @Query(() => Post)
  post(@Args() args: FindUniquePostArgs) {
    return this.postService.findUnique(args);
  }

  @Query(() => [Post])
  posts(@Args() args: FindManyPostArgs) {
    return this.postService.findAll(args);
  }

  @ResolveField()
  user(@Parent() post: Post) {
    const { userId } = post;
    return this.userService.findUnique({
      where: { id: userId },
    });
  }
  @Mutation(() => Post)
  createPost(@Args() args: CreateOnePostArgs) {
    return this.postService.createPost(args);
  }

  @Mutation(() => Post)
  updatePost(@Args() args: UpdateOnePostArgs) {
    return this.postService.updatePost(args);
  }
}
