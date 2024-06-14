import { History } from "src/history/entities/history.entity";
export declare class User {
    id: string;
    name: string;
    email: string;
    phone_number: string;
    role: string;
    is_active: boolean;
    history: History;
}
