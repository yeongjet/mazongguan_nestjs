import { Module } from '@nestjs/common'
import { AccountController } from './account/account.controller'
import { AccountService } from './account/account.service'
import { BatchController } from './batch/batch.controller'
import { BatchService } from './batch/batch.service'

@Module({
    controllers: [AccountController, BatchController],
    providers: [AccountService, BatchService]
})
export class EnterpriseModule {}
