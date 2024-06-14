import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: Repository<Book>);
    create(createBookDto: CreateBookDto): Promise<HttpException>;
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<{
        message: string;
        status: HttpStatus;
    }>;
    remove(id: string): Promise<string>;
}
