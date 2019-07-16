import { Module } from '@nestjs/common'
import { AdminModule } from './bp/admin/admin.module'

@Module({
    imports: [AdminModule]
})
export class AppModule {}
