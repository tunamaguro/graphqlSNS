import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateManyUserInput } from './post-create-many-user.input';

@InputType()
export class PostCreateManyUserInputEnvelope {

    @Field(() => [PostCreateManyUserInput], {nullable:false})
    data!: Array<PostCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
