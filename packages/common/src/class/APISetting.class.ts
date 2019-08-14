import { IsInt, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { DBSetting, DocSetting } from '../interface'
import { LogLevel } from '../enum'

export class APISetting {
    @IsInt()
    @Type(() => Number)
    port
    @IsString()
    @Type(() => String)
    host
    logLevel
    database: DBSetting
    doc: DocSetting
}
