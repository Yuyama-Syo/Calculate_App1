import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, CreateUsersDto } from './usersDto/createUsersDto';
import CreateUserResponseDto from './usersDto/createUserResponceDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUsers(
    createUsersDto: CreateUsersDto,
  ): Promise<CreateUserResponseDto[]> {
    const responceArray = [];
    try {
      for (let i = 0; i < createUsersDto.users.length; i++) {
        const responce = await this.createUser(createUsersDto.users[i]);
        responceArray.push(responce);
      }
      return responceArray;
    } catch {
      throw new BadRequestException(
        'Failed to create users due to internal error',
      );
    }
  }

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<CreateUserResponseDto> {
    try {
      return await this.userRepository.save(createUserDto);
    } catch {
      throw new BadRequestException('Failed to create user');
    }
  }

  async getUsers(): Promise<CreateUserResponseDto[]> {
    try {
      return await this.userRepository.find();
    } catch {
      throw new InternalServerErrorException('Failed to get users');
    }
  }
}
