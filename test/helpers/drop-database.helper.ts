import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export async function dropDatabase(config: ConfigService): Promise<void> {
  const AppDataSource = await new DataSource({
    type: 'postgres',
    host: config.get('database.host'),
    port: config.get('database.port'),
    username: config.get('database.username'),
    password: config.get('database.password'),
    database: config.get('database.database'),
    synchronize: config.get('database.synchronize'),
  }).initialize();

  await AppDataSource.dropDatabase();

  await AppDataSource.destroy();
}
