import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

import { User, UserDocument } from './user.schema';
import { UserDto } from '../user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
        @InjectConnection() private readonly _connection: Connection) { }

    async addUser(dto: UserDto): Promise<UserDocument> {
        const user = new this.userModel(dto);
        return await user.save();
    }
}
