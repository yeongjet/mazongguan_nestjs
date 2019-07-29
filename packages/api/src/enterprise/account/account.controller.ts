import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    UsePipes,
    ValidationPipe
} from '@nestjs/common'
import { Account } from './account.interface'
import { AccountService } from './account.service'
import { ParseIdPipe } from './account.pipe'
import * as DTO from './account.dto'

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() signUpDTO: DTO.SignUp) {
        this.accountService.signUp(signUpDTO)
    }

    @Get()
    async findAll(): Promise<Account[]> {
        return await this.findAll()
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIdPipe()) id): Promise<Account> {
        return await this.accountService.findOne(id)
    }
}
