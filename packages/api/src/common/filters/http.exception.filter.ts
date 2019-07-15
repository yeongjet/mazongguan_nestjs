import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException
} from '@nestjs/common'

import { APIException } from '../exception/api.exception'

@Catch(HttpException)
export class HttpExceptionFilter<T> implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        const request = ctx.getRequest()
        const status = exception.getStatus()
        //exception.getStatus
        if (exception instanceof APIException) {
            response.status(status).json({
                code: exception.getErrorCode(),
                message: exception.getErrorMessage(),
                date: new Date().toLocaleDateString(),
                path: request.url
            })
        } else {
            response.status(status).json({
                statusCode: status,
                date: new Date().toLocaleDateString(),
                path: request.url
            })
        }
    }
}
