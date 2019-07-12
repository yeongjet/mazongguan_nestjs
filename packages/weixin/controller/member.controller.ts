import { Controller, Get, Param } from './@nestjs/common'
import { Member } from '../interface/member.interface'
import { MemberService } from '../service/member.service'

import { MemberIdPipe } from '../pipe/member.id.pipe'

@Controller('member')
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    @Get()
    async findAll(): Promise<Member[]> {
        console.log('get all member')
        return await this.memberService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', new MemberIdPipe()) id): Promise<Member> {
        console.log(`get member: ${id}`)
        return await this.memberService.findOne(id)
    }
}
