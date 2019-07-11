import { Module } from '@nestjs/common'
import { MemberModule } from './bp/bp.module'

@Module({
    imports: [MemberModule]
})
export class AppModule {}
