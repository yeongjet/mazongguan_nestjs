import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { ApiOperation, ApiUseTags, ApiImplicitParam } from '@nestjs/swagger'
import { Code } from '@mazongguan/database'
import { ParseIdPipe, ValidationPipe } from '../../common'
import { BatchService } from './batch.service'
import { CreateDto } from './dto'

@ApiUseTags('批次')
@Controller('batch')
export class BatchController {
    constructor(private readonly batchService: BatchService) {}

    @Post()
    @ApiOperation({ title: '创建批次' })
    async create(@Body(new ValidationPipe()) createDto: CreateDto) {
        return this.batchService.create(createDto)
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
