import { IsInt, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { DBSetting } from '../interface'
import { LogLevel } from '../enum/LogLevel.enum'

export class APISettings {
    @IsInt()
    @Type(() => Number)
    port? = 3000
    @IsString()
    @Type(() => String)
    host? = 'localhost'
    database: DBSetting
    logLevel?: LogLevel = LogLevel.LOG
    docUrl: string
}
