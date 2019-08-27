import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { ApiOperation, ApiUseTags, ApiImplicitParam } from '@nestjs/swagger'
import { ParseIdPipe, ValidationPipe } from '../../common'
import { CodeService } from './code.service'
import { SignUpDto } from './dto'
import { Code } from '@mazongguan/database'

@ApiUseTags('账号')
@Controller('account')
export class CodeController {
    constructor(private readonly accountService: CodeService) {}

    @Post()
    @ApiOperation({ title: '' })
    async create(@Body(new ValidationPipe()) signUpDto: SignUpDto) {
        return this.accountService.create(signUpDto)
    }

    @Get()
    @ApiOperation({ title: '' })
    async findAll(): Promise<Code[]> {
        return {} as any
    }

    @Get(':id')
    @ApiOperation({ title: '' })
    @ApiImplicitParam({ name: 'id', description: '账号id', required: true })
    async findOne(@Param('id', new ParseIdPipe()) id: number): Promise<Code> {
        return {} as any
    }
}
