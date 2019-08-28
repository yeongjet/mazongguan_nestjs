import { Injectable, PipeTransform } from '@nestjs/common'
import { APICode, APIException } from '../index'
import * as _ from 'lodash'

@Injectable()
export class ParseIdPipe implements PipeTransform {
    transform(value: any) {
        const id: number = parseInt(value)
        if (!_.isNumber(id) || id <= 0) {
            throw new APIException('ID无效', APICode.INVALID_ID)
        }
        return id
    }
}
