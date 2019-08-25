import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { APICode } from '../enum/api.code.enum'
import { APIException } from '../exception/api.exception'
import * as _ from 'lodash'

@Injectable()
export class ParseIdPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const id = parseInt(value)
        if (!_.isNumber(id) || id <= 0) {
            throw new APIException('用户ID无效', APICode.INVALID_USERNAME)
        }
        return id
    }
}