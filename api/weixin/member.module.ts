import { Module } from './@nestjs/common'
import { MemberController } from './controller/member.controller'
import { MemberService } from './service/member.service'

@Module({
    controllers: [MemberController],
    providers: [MemberService]
})
export class MemberModule {}
