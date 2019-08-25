import { Controller, Get, Post, Body, Param, UsePipes } from '@nestjs/common'
import { ApiResponse, ApiOperation, ApiUseTags, ApiImplicitParam } from '@nestjs/swagger'
import { ValidationPipe } from '../../common/pipe/validation.pipe'
import { Account } from './interface/account.interface'
import { AccountService } from './account.service'
import { ParseIdPipe } from '../../common/pipe/parseId.pipe'
import { SignUpDto } from './dto'

@ApiUseTags('账号')
@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiOperation({ title: '注册账号' })
    async create(@Body(new ValidationPipe()) signUpDto: SignUpDto) {
        return this.accountService.signUp(signUpDto)
    }

    @Get()
    @ApiOperation({ title: '获取全部账号信息' })
    async findAll(): Promise<Account[]> {
        return await this.accountService.findAll()
    }

    @Get(':id')
    @ApiOperation({ title: '获取某个账号信息' })
    @ApiImplicitParam({ name: 'id', description: '账号id', required: true })
    async findOne(@Param('id', new ParseIdPipe()) id): Promise<Account> {
        return await this.accountService.findOne(id)
    }
}
