import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { ApiOperation, ApiUseTags, ApiImplicitParam } from '@nestjs/swagger'
import { ValidationPipe, ParseIdPipe } from '../../common'
import { AccountService } from './account.service'
import { CreateDto } from './dto'
import { Account } from '@mazongguan/database'

@ApiUseTags('账号')
@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Post()
    @ApiOperation({ title: '注册账号' })
    async create(@Body(new ValidationPipe()) signUpDto: CreateDto) {
        return this.accountService.create(signUpDto)
    }

    @Get()
    @ApiOperation({ title: '获取全部账号信息' })
    async findAll(): Promise<Account[]> {
        return await this.accountService.findAll()
    }

    @Get(':id')
    @ApiOperation({ title: '获取某个账号信息' })
    @ApiImplicitParam({ name: 'id', description: '账号id', required: true })
    async findOne(@Param('id', new ParseIdPipe()) id: number): Promise<Account> {
        return await this.accountService.findOne(id)
    }
}
