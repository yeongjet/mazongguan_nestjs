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
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const api_code_enum_1 = require("../../common/enum/api.code.enum");
class SignUpDto {
}
__decorate([
    swagger_1.ApiModelProperty({
        description: '用户名',
        required: true,
        type: 'string',
        minLength: 3,
        maxLength: 8,
        example: 'Micheal Jackson'
    }),
    class_transformer_1.Type(() => String),
    class_validator_1.Length(3, 8, {
        message: '用户名长度为3-8位',
        context: { code: api_code_enum_1.APICode.INVALID_USERNAME }
    }),
    class_validator_1.IsString({
        message: '用户名必须是字符串',
        context: { code: api_code_enum_1.APICode.INVALID_USERNAME }
    }),
    class_validator_1.IsNotEmpty({
        message: '用户名不能为空',
        context: { code: api_code_enum_1.APICode.INVALID_USERNAME }
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        description: '密码',
        required: true,
        type: 'string',
        minLength: 6,
        maxLength: 32,
        example: 'love123'
    }),
    class_transformer_1.Type(() => String),
    class_validator_1.Length(6, 32, {
        message: '密码长度为6-32位',
        context: { code: api_code_enum_1.APICode.INVALID_PASSWORD }
    }),
    class_validator_1.IsString({
        message: '密码必须是字符串',
        context: { code: api_code_enum_1.APICode.INVALID_PASSWORD }
    }),
    class_validator_1.IsNotEmpty({
        message: '密码不能为空',
        context: { code: api_code_enum_1.APICode.INVALID_PASSWORD }
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
exports.SignUpDto = SignUpDto;
