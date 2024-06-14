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
exports.History = void 0;
const book_entity_1 = require("../../book/entities/book.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let History = class History {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], History.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.history),
    __metadata("design:type", user_entity_1.User)
], History.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_entity_1.Book, (book) => book.history),
    __metadata("design:type", book_entity_1.Book)
], History.prototype, "book", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", default: new Date().toDateString() }),
    __metadata("design:type", String)
], History.prototype, "borrow_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", default: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString() }),
    __metadata("design:type", String)
], History.prototype, "return_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], History.prototype, "isTaken", void 0);
History = __decorate([
    (0, typeorm_1.Entity)('History')
], History);
exports.History = History;
//# sourceMappingURL=history.entity.js.map