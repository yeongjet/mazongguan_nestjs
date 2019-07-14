import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    ParseIntPipe,
    UsePipes,
    ValidationPipe
} from '@nestjs/common'
import { BP } from './bp.interface'
import { BPService } from './bp.service'
import { UserIDPipe } from './UserIDPipe'
import * as BPDto from './bp.dto'

@Controller('bp')
export class BPController {
    constructor(private readonly bpService: BPService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() BPSignUpDto: BPDto.SignUpDto) {
        this.bpService.signUp(BPSignUpDto)
    }
    @Get()
    async findAll(): Promise<BP[]> {
        console.log('get all member')
        return await this.bpService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe()) id): Promise<BP> {
        console.log(`get member: ${id}`)
        return await this.bpService.findOne(id)
    }
    // @Get(':id')
    // async findOne(id: number): Promise<BP> {
    //     console.log(`get member: ${id}`)
    //     return await this.bpService.findOne(id)
    // }
}
