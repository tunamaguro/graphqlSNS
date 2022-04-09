import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CreateOneUserArgs } from 'src/@generated/user/create-one-user.args';
import { FindManyUserArgs } from 'src/@generated/user/find-many-user.args';
import { FindUniqueUserArgs } from 'src/@generated/user/find-unique-user.args';
import { User } from 'src/@generated/user/user.model';
import { UsersService } from 'src/services/users/users.service';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User)
  user(@Args() args: FindUniqueUserArgs) {
    return this.userService.findUnique(args);
  }

  @Query(() => [User])
  users(@Args() args: FindManyUserArgs) {
    return this.userService.findAll(args);
  }

  @Mutation(() => User)
  createUser(@Args() args: CreateOneUserArgs) {
    return this.userService.createUser(args);
  }
}
