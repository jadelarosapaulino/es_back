import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [UsersService],
  exports: [UsersModule]
})
export class UsersHttpModule {}
