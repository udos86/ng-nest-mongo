import { IsEmail } from 'class-validator';
import { IsForbidden } from '@fullstack-typescript-workshop/validation';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

import { UserDto } from '../user.dto';

@Entity()
export class User implements UserDto {
  @ObjectIdColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  @IsForbidden('test')
  lastName: string;

  @Column()
  @IsEmail()
  email: string;
}

export function fromDto(dto: UserDto) {
  const { firstName, lastName, email } = dto;
  const user = new User();

  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;

  return user;
}
