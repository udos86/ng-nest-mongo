import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/mongoose/users.module';
// import { User } from './typeorm/user.entity';
// import { UsersModule } from './typeorm/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/sample'),
    UsersModule,
    /*
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'sample',
      entities: [User],
      synchronize: true,
      useUnifiedTopology: true
    }),
    UsersModule
    */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
