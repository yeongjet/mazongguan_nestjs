import { Member } from './bp.interface'
import { IsString, IsInt, IsNotEmpty, Min, Max } from './class-validator'
import { APICode } from '../common/enum/api.code.enum'

export class BPSignUpDto implements Member {
    @IsInt({
        message: '用户ID必须是整数',
        context: { errorCode: APICode.USER_ID_INVALID }
    })
    @Min(1, {
        message: '用户ID必须大于等于1',
        context: { errorCode: APICode.USER_ID_INVALID }
    })
    readonly id: number

    @IsNotEmpty({
        message: '用户姓名是必不可少的',
        context: { errorCode: APICode.USER_NAME_INVALID }
    })
    @IsString({
        message: '用户姓名是必不可少的',
        context: { errorCode: APICode.USER_NAME_INVALID }
    })
    readonly name: string

    @IsInt({
        message: '用户年龄必须是整数',
        context: { errorCode: APICode.USER_AGE_INVALID }
    })
    @Min(1, {
        message: '用户年龄必须大于1',
        context: { errorCode: APICode.USER_AGE_INVALID }
    })
    @Max(200, {
        message: '用户年龄必须小于200',
        context: { errorCode: APICode.USER_AGE_INVALID }
    })
    readonly age: number
}
