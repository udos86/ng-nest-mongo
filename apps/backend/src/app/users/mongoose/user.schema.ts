import { IsEmail } from 'class-validator';
import { IsForbidden } from '@fullstack-typescript-workshop/validation';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { UserDto } from '../user.dto';

export type UserDocument = User & Document;

@Schema()
export class User implements UserDto {
  @Prop()
  firstName: string;

  @Prop()
  @IsForbidden('test')
  lastName: string;

  @Prop()
  @IsEmail()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
