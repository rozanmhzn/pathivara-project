import { Book } from "src/book/entities/book.entity";
import { User } from "src/users/entities/user.entity";
export declare class History {
    id: string;
    user: User;
    book: Book;
    borrow_date: string;
    return_date: string;
    isTaken: boolean;
}
