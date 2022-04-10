import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Comment } from 'src/@generated/comment/comment.model';
import { CreateOneCommentArgs } from 'src/@generated/comment/create-one-comment.args';
import { FindManyCommentArgs } from 'src/@generated/comment/find-many-comment.args';
import { FindUniqueCommentArgs } from 'src/@generated/comment/find-unique-comment.args';
import { UpdateOneCommentArgs } from 'src/@generated/comment/update-one-comment.args';
import { Post } from 'src/@generated/post/post.model';
import { User } from 'src/@generated/user/user.model';
import { CommentService } from 'src/services/comment/comment.service';
import { PostsService } from 'src/services/posts/posts.service';
import { UsersService } from 'src/services/users/users.service';

@Resolver(Comment)
export class CommentResolver {
  constructor(
    readonly commentService: CommentService,
    readonly postService: PostsService,
    readonly userSercvice: UsersService,
  ) {}

  @Query(() => Comment)
  comment(@Args() args: FindUniqueCommentArgs) {
    return this.commentService.findUnique(args);
  }

  @Query(() => [Comment])
  comments(@Args() args: FindManyCommentArgs) {
    return this.commentService.findAll(args);
  }

  @ResolveField(() => Post)
  post(@Parent() commnet: Comment) {
    const { postId } = commnet;
    return this.postService.findUnique({
      where: {
        id: postId,
      },
    });
  }

  @ResolveField(() => User)
  user(@Parent() comment: Comment) {
    if (comment.userId === null) {
      return null;
    }
    return this.userSercvice.findUnique({
      where: {
        id: comment.userId,
      },
    });
  }
  @Mutation(() => Comment)
  createComment(@Args() args: CreateOneCommentArgs) {
    return this.commentService.createComment(args);
  }

  @Mutation(() => Comment)
  updateComment(@Args() args: UpdateOneCommentArgs) {
    return this.commentService.updateComment(args);
  }
}
