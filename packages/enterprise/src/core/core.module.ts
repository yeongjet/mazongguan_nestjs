import { Module } from '@nestjs/common'
import { Acc } from '@mazongguan/database'
import { ConfigModule } from '../config/config.module'
import { AccountController } from '../account/account.controller'
import { AccountService } from '../account/account.service'

@Module({
    controllers: [AccountController],
    providers: [AccountService],
    imports: [ConfigModule]
})
export class CoreModule {}
