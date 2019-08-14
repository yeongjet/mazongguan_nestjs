import { Module } from '@nestjs/common'
import { ConfigService } from './config.service'

@Module({
    providers: [
        {
            provide: ConfigService,
            // useValue: new ConfigService(`${process.env.NODE_ENV}db.env`)
            useValue: new ConfigService('../../../../../dev/db.env')
        }
    ],
    exports: [ConfigService]
})
export class ConfigModule {}