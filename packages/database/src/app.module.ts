import { Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
        })
    ],
    providers: [DatabaseService],
    exports: [DatabaseService]
})
export class ApplicationModule {}
