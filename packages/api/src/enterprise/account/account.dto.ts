import { Type } from 'class-transformer'
import { IsString, IsNotEmpty, Length } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'
import { APICode } from '../../common/enum/api.code.enum'

export class SignUpDto {
    @ApiModelProperty({ description: '用户名' })
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
    @ApiModelProperty({ description: '密码' })
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
