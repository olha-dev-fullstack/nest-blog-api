import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { registerAs } from '@nestjs/config';
import { User } from "src/users/user.entity";

export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
      synchronize: true,
    }),
  );