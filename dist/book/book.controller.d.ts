import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(createBookDto: CreateBookDto): Promise<import("@nestjs/common").HttpException>;
    findAll(): Promise<import("./entities/book.entity").Book[]>;
    findOne(id: string): Promise<import("./entities/book.entity").Book>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    remove(id: string): Promise<string>;
}
