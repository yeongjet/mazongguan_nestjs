import 'reflect-metadata'
import { IsInt, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { DBSetting, DocSetting } from '../interface'
import { LogLevel } from '../enum'

export class APISetting {
    @IsString()
    @Type(() => String)
    protocol
    @IsInt()
    @Type(() => Number)
    port
    @IsString()
    @Type(() => String)
    host
    logLevel: LogLevel
    database: DBSetting
    doc: DocSetting
}
