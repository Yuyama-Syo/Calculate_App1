import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserResponseDto from './usersDto/createUserResponceDto';
import { CreateUsersDto } from './usersDto/createUsersDto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUsers(
    @Body() createUsersDto: CreateUsersDto,
  ): Promise<CreateUserResponseDto[]> {
    try {
      const createdUsers = await this.userService.createUsers(createUsersDto);
      console.log(createdUsers);
      return createdUsers;
    } catch (error) {
      return error;
    }
  }

  @Get()
  async getUsers(): Promise<CreateUserResponseDto[]> {
    try {
      return await this.userService.getUsers();
    } catch (error) {
      return error;
    }
  }
}
