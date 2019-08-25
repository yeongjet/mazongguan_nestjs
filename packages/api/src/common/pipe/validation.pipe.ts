import * as _ from 'lodash'
import { PipeTransform, Injectable, ArgumentMetadata, Logger } from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToClass } from 'class-transformer'
import { APIException } from '../exception/api.exception'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value
        }
        const object = plainToClass(metatype, value)
        const errors = await validate(object)
        if (!_.isEmpty(errors)) {
            Logger.log(errors)
            // 获取到第一个没有通过验证的错误对象
            const { constraints, contexts } = errors.shift()
            // constraints: {"isString":"用户名必须是字符串","length":"用户名长度为3-8位"}
            // contexts: {"isString":{"code":10101},"length":{"code":10101}}
            const key = Object.keys(constraints)[0]
            throw new APIException(constraints[key], contexts[key].code)
        }
        return value
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object]
        return !types.includes(metatype)
    }
}
