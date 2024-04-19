import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  constructor( @InjectRepository(User) private userRepoditory: Repository<User>, private dataSource: DataSource) {}
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findAll(): Promise<User[]> {
    return this.userRepoditory.find();    
  }

  async findOne(userId: number): Promise<User> {
    return this.userRepoditory.findOneBy({userId});
  }

  async createMany(users: User[]) {
    const queryRunner = this.dataSource.createQueryRunner();
    
    queryRunner.connect();
    queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(users[0]);
      await queryRunner.manager.save(users[1]);

      await queryRunner.commitTransaction();      
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally	{
      await queryRunner.release();
    }
  }

  async remove(userId: number): Promise<void> {
    await this.userRepoditory.delete(userId);
  }
}
