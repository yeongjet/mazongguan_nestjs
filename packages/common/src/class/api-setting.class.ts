import 'reflect-metadata'
import { IsInt, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { DocumentSetting } from '../interface'
import { LogLevel } from '../enum'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

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
    database: TypeOrmModuleOptions
    document: DocumentSetting
}
