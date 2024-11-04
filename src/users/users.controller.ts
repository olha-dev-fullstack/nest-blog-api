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
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { GetUsersParamDto } from './dto/getUsersPAram.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateManyUsersDto } from './dto/createManyUsers.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token/access-token.guard';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthType } from 'src/auth/enums/authType.enum';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetches a list of users on the application' 
  })
  @ApiResponse({
    status:200,
    description: "Users fetched successfully based on the query"
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries returned per query',
    example: 10
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'The page number that you want the API to return',
    example: 1
  })
  public async getUsers(
    @Param() getUserParams: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUserParams, limit, page);
  }

  @Post()
  @Auth(AuthType.None)
  public async createUser(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Post('/create-many')
  @Auth(AuthType.None)
  public async createManyUsers(@Body() users: CreateManyUsersDto) {
    return this.usersService.createMany(users);
  }

  @Patch()
  public async updateUser(@Body() user: UpdateUserDto) {}
}
