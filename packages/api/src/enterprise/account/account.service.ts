import { Injectable } from '@nestjs/common'
import { Account } from './account.interface'
import { AccountServiceInterface } from './account.service.interface'
import { SignUpDto } from './account.dto'
import * as _ from 'lodash'

const dataSet = [
    {
        user_id: 3,
        username: 'joke',
        password: 'abc123',
        email: '625436194@163.com',
        cellphone: '153254785',
        avatar_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3001292911,2962166647&fm=58',
        role: [1],
        created_at: '2019-01-05 16:23:12',
        updated_at: '2019-03-11 08:13:34',
        last_login_time: '2019-05-03 11:45:32',
        last_login_ip: '113.66.104.131'
    },
    {
        user_id: 5,
        username: 'nero',
        password: '34dg345',
        email: '1423440749@163.com',
        cellphone: '13598487456',
        avatar_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3001292911,2962166647&fm=58',
        role: [1],
        created_at: '2019-01-05 16:23:12',
        updated_at: '2019-03-11 08:13:34',
        last_login_time: '2019-05-03 11:45:32',
        last_login_ip: '113.66.104.131'
    }
]

@Injectable()
export class AccountService implements AccountServiceInterface {
    async findAll(): Promise<Account[]> {
        return dataSet
    }

    async findOne(id: number) {
        return _.find(dataSet, o => o.user_id === id)
    }

    async signUp(dto: SignUpDto): Promise<number> {
        return 1
    }

    async updateProfile() {}
}
