import { Controller, Get, Param } from '@nestjs/common'
import { BP } from './bp.interface'
import { BPService } from './bp.service'
import { UserIDPipe } from './UserIDPipe'

@Controller('bp')
export class BPController {
    constructor(private readonly bpService: BPService) {}

    @Get()
    async findAll(): Promise<BP[]> {
        console.log('get all member')
        return await this.bpService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', new UserIDPipe()) id): Promise<BP> {
        console.log(`get member: ${id}`)
        return await this.bpService.findOne(id)
    }
}
