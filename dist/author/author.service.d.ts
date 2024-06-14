import { HttpStatus } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
export declare class AuthorService {
    private readonly authorRepository;
    constructor(authorRepository: Repository<Author>);
    create(createAuthorDto: CreateAuthorDto): Promise<string>;
    findAll(): Promise<Author[]>;
    findOne(id: number): Promise<Author>;
    update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<{
        message: string;
        status: HttpStatus;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: HttpStatus;
    }>;
}
