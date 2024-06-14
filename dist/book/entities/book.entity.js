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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const author_entity_1 = require("../../author/entities/author.entity");
const history_entity_1 = require("../../history/entities/history.entity");
const typeorm_1 = require("typeorm");
let Book = class Book {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Book.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "book_name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => author_entity_1.Author, (author) => author.book),
    __metadata("design:type", author_entity_1.Author)
], Book.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Book.prototype, "published_year", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Book.prototype, "isAvailable", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_entity_1.History, (history) => history.book),
    __metadata("design:type", history_entity_1.History)
], Book.prototype, "history", void 0);
Book = __decorate([
    (0, typeorm_1.Entity)('Books')
], Book);
exports.Book = Book;
//# sourceMappingURL=book.entity.js.map