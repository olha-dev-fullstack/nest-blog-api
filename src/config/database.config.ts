import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  mongoDbConnectionString: process.env.MONGO_DB_CONNECTION_STRING,
  mongoDbName: process.env.MONGO_DB_NAME
}));
