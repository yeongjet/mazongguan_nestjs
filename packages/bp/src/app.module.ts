import { Module } from '@nestjs/common'
import { BPModule } from './bp.module'

@Module({
    imports: [BPModule]
})
export class AppModule {}
