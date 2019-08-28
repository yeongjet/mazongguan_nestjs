import { Type } from 'class-transformer'
import { IsString, IsNotEmpty, Length } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'
import { APICode } from '../../../common'

export class CreateDto {
    @Type(() => String)
    @IsNotEmpty({ message: '用户名不能为空', context: { code: APICode.INVALID_USERNAME } })
    @IsString({ message: '用户名必须是字符串', context: { code: APICode.INVALID_USERNAME } })
    @Length(3, 20, { message: '用户名长度为3-20位', context: { code: APICode.INVALID_USERNAME } })
    @ApiModelProperty({ description: '用户名', required: true, type: 'string', minLength: 3, maxLength: 20 })
    readonly username: string

    @Type(() => String)
    @IsNotEmpty({ message: '密码不能为空', context: { code: APICode.INVALID_PASSWORD } })
    @IsString({ message: '密码必须是字符串', context: { code: APICode.INVALID_PASSWORD } })
    @Length(6, 32, { message: '密码长度为6-32位', context: { code: APICode.INVALID_PASSWORD } })
    @ApiModelProperty({ description: '密码', required: true, type: 'string', minLength: 6, maxLength: 32 })
    readonly password: string
}
