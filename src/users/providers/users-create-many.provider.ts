import { ConflictException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../user.entity';
import { CreateManyUsersDto } from '../dto/createManyUsers.dto';
import { handleDbError } from 'src/common/utils/exception.util';

@Injectable()
export class UsersCreateManyProvider {
  constructor(private readonly dataSource: DataSource) {}

  public async createMany(createUsersDto: CreateManyUsersDto) {
    const newUsers: User[] = [];
    const queryRunner = this.dataSource.createQueryRunner();
    await handleDbError(
      async () => {
        queryRunner.connect();
        queryRunner.startTransaction();
      },
      { message: 'Could not connect to the database' },
    );
    try {
      for (const user of createUsersDto.users) {
        const newUser = queryRunner.manager.create(User, user);
        const result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new ConflictException('Could not complete the transaction', {
        description: String(e),
      });
    } finally {
      await handleDbError(
        async () => {
          queryRunner.release();
        },
        { message: 'Could not release the connection' },
      );
    }
    return newUsers;
  }
}
