import { BP } from './bp.interface'
import { Type } from 'class-transformer'
import { IsString, IsInt, IsNotEmpty, Min, Max, Length } from 'class-validator'
import { APICode } from '../../common/enum/api.code.enum'

export class BPSignUpDto {
    @Type(() => String)
    @Length(1, 8, {
        message: '用户名长度为1-8位',
        context: { code: APICode.INVALID_USERNAME }
    })
    @IsString({
        message: '用户名必须是字符串',
        context: { code: APICode.INVALID_USERNAME }
    })
    @IsNotEmpty({
        message: '用户名不能为空',
        context: { code: APICode.INVALID_USERNAME }
    })
    readonly username: string
    @Type(() => String)
    @Length(6, 12, {
        message: '密码长度为6-12位',
        context: { code: APICode.INVALID_PASSWORD }
    })
    @IsString({
        message: '密码必须是字符串',
        context: { code: APICode.INVALID_PASSWORD }
    })
    @IsNotEmpty({
        message: '密码不能为空',
        context: { code: APICode.INVALID_PASSWORD }
    })
    readonly password: string
}
