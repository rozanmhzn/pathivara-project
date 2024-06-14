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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const history_entity_1 = require("./entities/history.entity");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("../book/entities/book.entity");
let HistoryService = class HistoryService {
    constructor(historyRepository, bookRepository) {
        this.historyRepository = historyRepository;
        this.bookRepository = bookRepository;
    }
    async create(createHistoryDto) {
        const bookId = String(createHistoryDto.book);
        const isAvailable = (await this.bookRepository.findOne({ where: { id: bookId } })).isAvailable;
        if (isAvailable) {
            try {
                const res = await this.historyRepository
                    .createQueryBuilder('books')
                    .insert()
                    .values(createHistoryDto)
                    .execute();
                if (res) {
                    try {
                        this.bookRepository
                            .createQueryBuilder()
                            .update(book_entity_1.Book)
                            .set({ isAvailable: false })
                            .where("id = :id", { id: createHistoryDto.book })
                            .execute();
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                return new common_1.HttpException({ message: "Borrowed Book successfully" }, common_1.HttpStatus.OK);
            }
            catch (error) {
                return new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else
            return "Book is already taken by some user";
    }
    async returnBook(id, updateHistoryDto) {
        console.log("Caller", await this.payCharge(id));
        if (await this.payCharge(id)) {
            return "Pay the charge";
        }
        const res = await this.historyRepository
            .createQueryBuilder()
            .update(history_entity_1.History)
            .set({ isTaken: false })
            .where("id = :id", { id: id })
            .execute();
        const bookId = (await this.historyRepository.findOne({ relations: {
                book: true,
            }, where: { id: id } })).book.id;
        console.log(bookId);
        if (res) {
            try {
                this.bookRepository
                    .createQueryBuilder()
                    .update(book_entity_1.Book)
                    .set({ isAvailable: true })
                    .where("id = :id", { id: bookId })
                    .execute();
            }
            catch (error) {
                console.log(error);
            }
        }
        return "Book returned successfully";
    }
    async payCharge(id) {
        const res = (await this.historyRepository.findOne({ where: { id: id } })).return_date;
        const todayDate = new Date().toISOString();
        const returnDate = new Date(res).toISOString();
        console.log(todayDate);
        console.log(returnDate);
        console.log(returnDate > todayDate);
        if (returnDate > todayDate) {
            return true;
        }
        else {
            return false;
        }
    }
    async findAll() {
        const users = await this.historyRepository.find({
            relations: {
                book: true,
                user: true
            }
        });
        return users;
    }
    async findOne(id) {
        return `This action returns a #${id} history`;
    }
    async update(id, updateHistoryDto) {
        return `This action updates a #${id} history`;
    }
    async remove(id) {
        return `This action removes a #${id} history`;
    }
};
HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_entity_1.History)),
    __param(1, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], HistoryService);
exports.HistoryService = HistoryService;
//# sourceMappingURL=history.service.js.map