import { DynamicModule, Global } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { DatabaseSetting } from '@mazongguan/common'
import { CoreService } from './core/core.service'
import * as models from './model'

@Global()
export class DatabaseModule {
    public static forRoot(setting: DatabaseSetting): DynamicModule {
        const typeOrmSetting: TypeOrmModuleOptions = {
            type: setting.type,
            host: setting.host,
            port: setting.port,
            username: setting.username,
            password: setting.password,
            database: setting.database,
            synchronize: setting.synchronize,
            logging: setting.logging,
            entities: Object.values(models)
        } as any
        return {
            module: DatabaseModule,
            imports: [TypeOrmModule.forRoot(typeOrmSetting)],
            providers: [CoreService],
            exports: [CoreService]
        }
    }
}
