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
import { Admin } from './admin.interface'
import { AdminService } from './admin.service'
import { IdPipe } from './admin.pipe'
import * as dto from './admin.dto'

@Controller('bp')
export class AdminController {
    constructor(private readonly bpService: AdminService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() signupDto: dto.Signup) {
        this.bpService.signUp(signupDto)
    }

    @Get()
    async findAll(): Promise<Admin[]> {
        console.log('get all member')
        return await this.bpService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe()) id): Promise<Admin> {
        console.log(`get member: ${id}`)
        return await this.bpService.findOne(id)
    }
    // @Get(':id')
    // async findOne(id: number): Promise<BP> {
    //     console.log(`get member: ${id}`)
    //     return await this.bpService.findOne(id)
    // }
}
