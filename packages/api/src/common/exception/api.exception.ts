import { HttpException, HttpStatus } from '@nestjs/common'
import { APICode } from '../enum/api-code.enum'

export class APIException extends HttpException {
    private errorMessage: string
    private errorCode: APICode

    constructor(errorMessage: string, errorCode: APICode) {
        super(errorMessage, 200)
        this.errorMessage = errorMessage
        this.errorCode = errorCode
    }

    getErrorCode(): APICode {
        return this.errorCode
    }

    getErrorMessage(): string {
        return this.errorMessage
    }
}
