import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiResponse, ApiOperation, ApiUseTags } from '@nestjs/swagger'
import { Account } from './account.interface'
import { AccountService } from './account.service'
import { ParseIdPipe } from './account.pipe'
import { SignUpDto } from './account.dto'

@ApiUseTags('账号')
@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ title: '注册账号' })
    @ApiResponse({ status: 200, description: '注册成功' })
    async create(@Body() signUpDto: SignUpDto) {
        return this.accountService.signUp(signUpDto)
    }

    @Get()
    async findAll(): Promise<Account[]> {
        return await this.accountService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIdPipe()) id): Promise<Account> {
        return await this.accountService.findOne(id)
    }
}
