import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/metaOptions.module';
import { PaginationModule } from './common/pagination/pagination.module';
import database from './config/database.config';
import appConfig from './config/app.config';
import environmentValidation from './config/environment.validation';
import jwtConfig from './auth/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from './auth/guards/access-token/access-token.guard';
import { AuthenticationGuard } from './auth/guards/authentication/authentication.guard';
const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [database, appConfig],
      validationSchema: environmentValidation,
      expandVariables: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
    }),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    TypeOrmModule.forRootAsync({
      useFactory: database,
    }),
    UsersModule,
    PostsModule,
    AuthModule,
    TagsModule,
    MetaOptionsModule,
    PaginationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
    AccessTokenGuard
  ],
})
export class AppModule {}
