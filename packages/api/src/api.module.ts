import { DynamicModule } from '@nestjs/common'
import { DatabaseModule } from '@mazongguan/database'
import { EnterpriseModule } from './enterprise/enterprise.module'
import { APISetting } from '@mazongguan/common'
import { ConfigModule } from './config/config.module'

export class APIModule {
    static forRoot(setting: APISetting): DynamicModule {
        return {
            module: APIModule,
            imports: [EnterpriseModule, ConfigModule.forRoot(setting), DatabaseModule.forRoot(setting.database)]
        }
    }
}
