import { APIException } from '../exception/api.exception'

import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException
} from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        const request = ctx.getRequest()
        const status = exception.getStatus()
        console.log(response.status(''))
        if (exception instanceof APIException) {
            response.status(status)({
                code: exception.getErrorCode(),
                message: exception.getErrorMessage(),
                date: new Date().toLocaleDateString(),
                path: request.url
            })
        } else {
            response.status(status)({
                statusCode: status,
                date: new Date().toLocaleDateString(),
                path: request.url
            })
        }
    }
}
