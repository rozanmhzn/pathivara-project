import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<HttpException>;
    findAll(): Promise<User[]>;
    findOne(id: String): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        message: string;
        status: HttpStatus;
    }>;
    remove(id: number): string;
}
