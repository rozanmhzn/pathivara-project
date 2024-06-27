import { Book } from "src/book/entities/book.entity";
export declare class CreateAuthorDto {
    author_id: string;
    first_name: string;
    last_name: string;
    age: number;
    email: string;
    address: string;
    book: Book;
}
