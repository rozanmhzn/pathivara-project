"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const book_entity_1 = require("./entities/book.entity");
const typeorm_2 = require("@nestjs/typeorm");
let BookService = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async create(createBookDto) {
        try {
            await this.bookRepository
                .createQueryBuilder('books')
                .insert()
                .values(createBookDto)
                .execute();
            return new common_1.HttpException(createBookDto, common_1.HttpStatus.OK);
        }
        catch (error) {
            return new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        const result = this.bookRepository
            .createQueryBuilder('books')
            .select()
            .leftJoin('books.author', 'author')
            .addSelect(['author.first_name', 'author.last_name'])
            .getMany();
        return result;
    }
    async findOne(id) {
        try {
            const book = await this.bookRepository
                .createQueryBuilder()
                .select("book")
                .from(book_entity_1.Book, "book")
                .where("book.id = :id", { id: id })
                .getOne();
            return book;
        }
        catch (error) {
            console.log(error);
        }
    }
    async update(id, updateBookDto) {
        try {
            this.bookRepository
                .createQueryBuilder()
                .update(book_entity_1.Book)
                .set(updateBookDto)
                .where("id = :id", { id: id })
                .execute();
            return ({
                message: "Updated",
                status: common_1.HttpStatus.OK
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(id) {
        return `This action removes a #${id} book`;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map