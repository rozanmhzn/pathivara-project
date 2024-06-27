import { Author } from "src/author/entities/author.entity";
export declare class CreateBookDto {
    id: string;
    book_name: string;
    author: Author;
    published_date: string;
}
