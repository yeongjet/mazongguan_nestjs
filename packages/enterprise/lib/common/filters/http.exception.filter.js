"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_exception_1 = require("../exception/api.exception");
const common_1 = require("@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        //const request = ctx.getRequest()
        const status = exception.getStatus();
        // console.log(`request.ip: ${request.ip}`)
        // console.log(`request.headers: ${JSON.stringify(request.headers)}`)
        // console.log(`request.query: ${JSON.stringify(request.query)}`)
        // console.log(`request.body: ${request.body}`)
        // console.log(`request.params: ${JSON.stringify(request.params)}`)
        // console.log(`request.id: ${request.id}`)
        // console.log(`request.hostname: ${request.hostname}`)
        if (exception instanceof api_exception_1.APIException) {
            response.status(status).send({
                code: exception.getErrorCode(),
                message: exception.getErrorMessage(),
                date: new Date().toLocaleString()
            });
        }
        else {
            response.status(status).send({
                message: exception.message.message,
                date: new Date().toLocaleString()
            });
        }
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
