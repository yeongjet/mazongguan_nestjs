import { Module } from '@nestjs/common'
import { BPController } from './bp.controller'
import { BPService } from './bp.service'

@Module({
    controllers: [BPController],
    providers: [BPService]
})
export class BPModule {}
