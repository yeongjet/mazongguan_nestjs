import { DynamicModule, Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseService } from './database.service'
import { DatabaseSetting, DocumentSetting } from '@mazongguan/common'
import * as models from '../model'

@Global()
export class DatabaseModule {
    public static forRoot(settings: DatabaseSetting): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                TypeOrmModule.forRoot({
                    ...settings,
                    entities: Object.values(models)
                })
            ],
            providers: [DatabaseService],
            exports: [DatabaseService]
        }
    }
}
