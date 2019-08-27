import { HttpException } from '@nestjs/common'

export class APIException extends HttpException {
    private errorMessage: string
    private errorCode: number

    constructor(errorMessage: string, errorCode: number) {
        super(errorMessage, 200)
        this.errorMessage = errorMessage
        this.errorCode = errorCode
    }

    getErrorCode(): number {
        return this.errorCode
    }

    getErrorMessage(): string {
        return this.errorMessage
    }
}
