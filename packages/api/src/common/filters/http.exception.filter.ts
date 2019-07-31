import { APIException } from '../exception/api.exception'

import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        //const request = ctx.getRequest()
        const status = exception.getStatus()
        // console.log(`request.ip: ${request.ip}`)
        // console.log(`request.headers: ${JSON.stringify(request.headers)}`)
        // console.log(`request.query: ${JSON.stringify(request.query)}`)
        // console.log(`request.body: ${request.body}`)
        // console.log(`request.params: ${JSON.stringify(request.params)}`)
        // console.log(`request.id: ${request.id}`)
        // console.log(`request.hostname: ${request.hostname}`)
        if (exception instanceof APIException) {
            response.status(status).send({
                code: exception.getErrorCode(),
                message: exception.getErrorMessage(),
                date: new Date().toLocaleString()
            })
        } else {
            response.status(status).send({
                message: exception.message.message,
                date: new Date().toLocaleString()
            })
        }
    }
}
