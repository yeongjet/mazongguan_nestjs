import { Type } from 'class-transformer'
import { IsString, IsInt, IsEnum, Length, Min, Max } from 'class-validator'
import { ApiModelProperty } from '@nestjs/swagger'
import { APICode, LabelType } from '../../../common'

export class CreateDto {
    @Type(() => Number)
    @IsInt({ message: '企业id必须为整数', context: { code: APICode.INVALID_ID } })
    @Min(1, { message: '企业id最小为1', context: { code: APICode.INVALID_ID } })
    readonly company_id: number

    @Type(() => Number)
    @IsEnum(LabelType, { message: '标类型必须是指定值', context: { code: APICode.INVALID_LABEL_TYPE } })
    @ApiModelProperty({ description: '标类型', required: true, enum: LabelType })
    readonly label_type: number

    @Type(() => String)
    @IsString({ message: '批次名称必须是字符串', context: { code: APICode.INVALID_BATCH_NAME } })
    @Length(1, 64, { message: '批次名称长度为1-64位', context: { code: APICode.INVALID_BATCH_NAME } })
    @ApiModelProperty({ description: '批次名称', required: true, type: 'string', minLength: 1, maxLength: 64 })
    readonly batch_name: string

    @Type(() => Number)
    @IsInt({ message: '生码数量必须为整数', context: { code: APICode.INVALID_ID } })
    @Min(10000, { message: '生码数量最少为10000', context: { code: APICode.INVALID_ID } })
    @ApiModelProperty({ description: '生码数量', required: true, type: 'number' })
    readonly code_count: number

    @Type(() => Number)
    @IsInt({ message: '损耗量必须为整数', context: { code: APICode.INVALID_ID } })
    @Min(1, { message: '损耗量最少为1', context: { code: APICode.INVALID_ID } })
    @Max(10000, { message: '损耗量最大为10000', context: { code: APICode.INVALID_ID } })
    @ApiModelProperty({ description: '每10000个码损耗量', required: true, type: 'number' })
    readonly loss_prediction: number
}
