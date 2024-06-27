import { Author } from "src/author/entities/author.entity";
import { History } from "src/history/entities/history.entity";
export declare class Book {
    id: string;
    book_name: string;
    author: Author;
    published_year: string;
    isAvailable: boolean;
    history: History;
}
