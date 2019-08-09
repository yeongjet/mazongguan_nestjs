import { Module } from '@nestjs/common'
import { AccountController } from './account/account.controller'
import { AccountService } from './account/account.service'

@Module({
    controllers: [AccountController],
    providers: [AccountService]
})
export class EnterpriseModule {}
