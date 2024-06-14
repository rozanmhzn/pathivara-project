import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
export declare class HistoryController {
    private readonly historyService;
    constructor(historyService: HistoryService);
    create(createHistoryDto: CreateHistoryDto): Promise<import("@nestjs/common").HttpException | "Book is already taken by some user">;
    returnBook(id: string, updateHistoryDto: UpdateHistoryDto): Promise<"Pay the charge" | "Book returned successfully">;
    findAll(): Promise<import("./entities/history.entity").History[]>;
    findOne(id: string): Promise<string>;
    update(id: string, updateHistoryDto: UpdateHistoryDto): Promise<string>;
    remove(id: string): Promise<string>;
}
