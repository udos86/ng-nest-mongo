import { Controller, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDto } from '../user.dto';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('/users')
    async create(@Body() body: UserDto): Promise<string> {
        const user = await this.usersService.addUser(body);
        return JSON.stringify(user);
    }
}
