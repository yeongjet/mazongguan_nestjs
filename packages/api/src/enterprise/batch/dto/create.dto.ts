import { Type } from 'class-transformer'
import { IsString, IsEnum, IsNotEmpty, Length } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'
import { APICode, LabelType } from '../../../common'

export class CreateDto {
    @Type(() => String)
    @IsEnum(LabelType, {
        message: '标类型必须是指定值',
        context: { code: APICode.INVALID_LABEL_TYPE }
    })
    @IsNotEmpty({
        message: '标类型不能为空',
        context: { code: APICode.INVALID_LABEL_TYPE }
    })
    @ApiModelProperty({
        description: '标类型',
        required: true,
        enum: LabelType
    })
    readonly label_type: LabelType

    @ApiModelProperty({
        description: '密码',
        required: true,
        type: 'string',
        minLength: 6,
        maxLength: 32,
        example: 'love123'
    })
    @Type(() => String)
    @Length(6, 32, {
        message: '密码长度为6-32位',
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
