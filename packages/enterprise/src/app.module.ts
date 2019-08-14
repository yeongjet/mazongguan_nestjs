import { Module } from '@nestjs/common'
import { ConfigModule } from './common/module/config/config.module'
import { AccountController } from './account/account.controller'
import { AccountService } from './account/account.service'

@Module({
    controllers: [AccountController],
    providers: [AccountService],
    imports: [
        ConfigModule
    ]
})

export class AppModule {}