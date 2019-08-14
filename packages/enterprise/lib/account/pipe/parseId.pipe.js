"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const api_code_enum_1 = require("../../common/enum/api.code.enum");
const api_exception_1 = require("../../common/exception/api.exception");
const _ = require("lodash");
let ParseIdPipe = class ParseIdPipe {
    transform(value, metadata) {
        let id = parseInt(value);
        if (!_.isNumber(id) || id <= 0) {
            throw new api_exception_1.APIException('用户ID无效', api_code_enum_1.APICode.INVALID_USERNAME, common_1.HttpStatus.BAD_REQUEST);
        }
        return id;
    }
};
ParseIdPipe = __decorate([
    common_1.Injectable()
], ParseIdPipe);
exports.ParseIdPipe = ParseIdPipe;
