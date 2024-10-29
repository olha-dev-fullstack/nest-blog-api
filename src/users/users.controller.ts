import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { GetUsersParamDto } from './dto/getUsersPAram.dto';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public async getUsers(
    @Param() getUserParams: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return 'Get users';
  }

  @Post()
  public async createUser(@Body() user: CreateUserDto) {
    return user;
  }

  @Patch()
  public async updateUser(@Body() user: UpdateUserDto) {}
}
