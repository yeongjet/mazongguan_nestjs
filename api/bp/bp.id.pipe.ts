import {
    ArgumentMetadata,
    Injectable,
    PipeTransform,
    HttpStatus
} from '@nestjs/common'
import { APICode } from '../common/enum/api.code.enum'
import { APIException } from '../common/exception/api.exception'

@Injectable()
export class BPIdPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value)
        let id = parseInt(value)
        console.log(id)
        if (isNaN(id) || typeof id !== 'number' || id <= 0) {
            throw new APIException(
                '用户ID无效',
                APICode.USER_ID_INVALID,
                HttpStatus.BAD_REQUEST
            )
        }
        return value
    }
}
