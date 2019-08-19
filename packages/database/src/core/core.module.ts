import { DynamicModule, Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CoreService } from './core.service'
import { DatabaseSetting, DocumentSetting } from '@mazongguan/common'
import * as models from '../model'

@Global()
export class CoreModule {
    public static forRoot(settings: DatabaseSetting): DynamicModule {
        return {
            module: CoreModule,
            imports: [
                TypeOrmModule.forRoot({
                    ...settings,
                    entities: Object.values(models)
                })
            ],
            providers: [CoreService],
            exports: [CoreService]
        }
    }
}
