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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        try {
            await this.userRepository
                .createQueryBuilder('users')
                .insert()
                .values(createUserDto)
                .execute();
            return new common_1.HttpException(createUserDto, common_1.HttpStatus.OK);
        }
        catch (error) {
            return new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        const result = await this.userRepository
            .createQueryBuilder('users')
            .select()
            .getMany();
        return result;
    }
    async findOne(id) {
        try {
            const users = await this.userRepository
                .createQueryBuilder()
                .select("users")
                .from(user_entity_1.User, "users")
                .where("users.id = :id", { id: id })
                .getOne();
            return users;
        }
        catch (error) {
            console.log(error);
        }
    }
    async update(id, updateUserDto) {
        try {
            this.userRepository
                .createQueryBuilder()
                .update(user_entity_1.User)
                .set(updateUserDto)
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
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map