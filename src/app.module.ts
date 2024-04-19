import { PhotoModule } from './photos/photo.module';
import { UsersHttpModule } from './users/users-http.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityList } from './share/entityList';

@Module({
  imports: [
        PhotoModule, 
    // UsersHttpModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'MAx.5237',
      database: 'election',
      entities: EntityList,
      retryAttempts: 3,
      retryDelay: 3000,
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
