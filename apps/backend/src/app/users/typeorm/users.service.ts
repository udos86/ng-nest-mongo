import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { fromDto, User } from './user.entity';
import { UserDto } from '../user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly repository: Repository<User>) { }

    async addUser(dto: UserDto): Promise<User> {
        return await this.repository.save(fromDto(dto));
    }
}
