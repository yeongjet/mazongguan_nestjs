"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class APIException extends common_1.HttpException {
    constructor(errorMessage, errorCode, statusCode) {
        super(errorMessage, statusCode);
        this.errorMessage = errorMessage;
        this.errorCode = errorCode;
    }
    getErrorCode() {
        return this.errorCode;
    }
    getErrorMessage() {
        return this.errorMessage;
    }
}
exports.APIException = APIException;
