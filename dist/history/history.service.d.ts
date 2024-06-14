import { HttpException } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { History } from './entities/history.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/book/entities/book.entity';
export declare class HistoryService {
    private readonly historyRepository;
    private readonly bookRepository;
    constructor(historyRepository: Repository<History>, bookRepository: Repository<Book>);
    create(createHistoryDto: CreateHistoryDto): Promise<HttpException | "Book is already taken by some user">;
    returnBook(id: string, updateHistoryDto: UpdateHistoryDto): Promise<"Pay the charge" | "Book returned successfully">;
    payCharge(id: string): Promise<boolean>;
    findAll(): Promise<History[]>;
    findOne(id: number): Promise<string>;
    update(id: number, updateHistoryDto: UpdateHistoryDto): Promise<string>;
    remove(id: number): Promise<string>;
}
