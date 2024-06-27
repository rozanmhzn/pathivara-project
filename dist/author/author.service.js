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
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const author_entity_1 = require("./entities/author.entity");
const typeorm_2 = require("typeorm");
let AuthorService = class AuthorService {
    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }
    async create(createAuthorDto) {
        await this.authorRepository
            .createQueryBuilder('author')
            .insert()
            .values(createAuthorDto)
            .execute();
        return ("Succeesfully Inserted");
    }
    async findAll() {
        const result = await this.authorRepository
            .createQueryBuilder('author')
            .select()
            .getMany();
        return result;
    }
    async findOne(id) {
        try {
            const author = await this.authorRepository
                .createQueryBuilder()
                .select("author")
                .from(author_entity_1.Author, "author")
                .where("author.author_id = :id", { id: id })
                .getOne();
            return author;
        }
        catch (error) {
            console.log(error);
        }
    }
    async update(id, updateAuthorDto) {
        try {
            this.authorRepository
                .createQueryBuilder()
                .update(author_entity_1.Author)
                .set(updateAuthorDto)
                .where("author_id = :id", { id: id })
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
        await this.authorRepository
            .createQueryBuilder('author')
            .delete()
            .from(author_entity_1.Author)
            .where("author_id = :id", { id: id })
            .execute();
        return ({
            message: "Delete SuccessFully",
            status: common_1.HttpStatus.OK
        });
    }
};
AuthorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(author_entity_1.Author)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthorService);
exports.AuthorService = AuthorService;
//# sourceMappingURL=author.service.js.map