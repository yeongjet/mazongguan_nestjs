import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export interface DatabaseSetting {
    type: string
    host: string
    port: number
    username: string
    password: string
    database: string
    synchronize: boolean
    logging: boolean
}
