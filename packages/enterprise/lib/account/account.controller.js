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
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("../common/pipe/validation.pipe");
const account_service_1 = require("./account.service");
const parseId_pipe_1 = require("./pipe/parseId.pipe");
const dto_1 = require("./dto");
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    async create(signUpDto) {
        return this.accountService.signUp(signUpDto);
    }
    async findAll() {
        return await this.accountService.findAll();
    }
    async findOne(id) {
        return await this.accountService.findOne(id);
    }
};
__decorate([
    common_1.Post(),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    swagger_1.ApiOperation({ title: '注册账号' }),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "create", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ title: '获取全部账号信息' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiImplicitParam({ name: 'id', description: '账号id', required: true }),
    swagger_1.ApiOperation({ title: '获取某个账号信息' }),
    __param(0, common_1.Param('id', new parseId_pipe_1.ParseIdPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "findOne", null);
AccountController = __decorate([
    swagger_1.ApiUseTags('账号'),
    common_1.Controller('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
exports.AccountController = AccountController;
