import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    create(createAuthorDto: CreateAuthorDto): Promise<string>;
    findAll(): Promise<import("./entities/author.entity").Author[]>;
    findOne(id: string): Promise<import("./entities/author.entity").Author>;
    update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    remove(id: string): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
