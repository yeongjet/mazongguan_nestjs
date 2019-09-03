import { DynamicModule } from '@nestjs/common'
import { APISetting } from '@mazongguan/common'
import { ConfigService } from './config.service'

export class ConfigModule {
    public static forRoot(setting: APISetting): DynamicModule {
        return {
            module: ConfigModule,
            providers: [
                {
                    provide: ConfigService,
                    useValue: new ConfigService(setting)
                }
            ],
            exports: [ConfigService]
        }
    }
}
