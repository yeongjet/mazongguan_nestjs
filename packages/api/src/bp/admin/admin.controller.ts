import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    UsePipes,
    ValidationPipe
} from '@nestjs/common'
import { Admin } from './admin.interface'
import { AdminService } from './admin.service'
import { ParseIdPipe } from './admin.pipe'
import * as DTO from './admin.dto'

@Controller('admin')
export class AdminController {
    constructor(private readonly bpService: AdminService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() signUpDTO: DTO.SignUp) {
        this.bpService.signUp(signUpDTO)
    }

    @Get()
    async findAll(): Promise<Admin[]> {
        return await this.bpService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIdPipe()) id): Promise<Admin> {
        return await this.bpService.findOne(id)
    }
    // @Get(':id')
    // async findOne(id: number): Promise<BP> {
    //     console.log(`get member: ${id}`)
    //     return await this.bpService.findOne(id)
    // }
}
