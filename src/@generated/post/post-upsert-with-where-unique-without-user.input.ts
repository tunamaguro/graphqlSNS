import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithoutUserInput } from './post-update-without-user.input';
import { PostCreateWithoutUserInput } from './post-create-without-user.input';

@InputType()
export class PostUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    where!: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutUserInput, {nullable:false})
    update!: PostUpdateWithoutUserInput;

    @Field(() => PostCreateWithoutUserInput, {nullable:false})
    create!: PostCreateWithoutUserInput;
}
