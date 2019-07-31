import { Module } from '@nestjs/common'
import { ConfigModule } from './config/config.module'
import { EnterpriseModule } from './enterprise/enterprise.module'

@Module({
    imports: [EnterpriseModule, ConfigModule]
})
export class AppModule {}
