import { Injectable, Logger } from '@nestjs/common'
import { Account } from '@mazongguan/database'
import { SignUpDto } from './dto'
import * as _ from 'lodash'

// {
//     user_id: 3,
//     username: 'joke',
//     password: 'abc123',
//     email: '625436194@163.com',
//     cellphone: '153254785',
//     avatar_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3001292911,2962166647&fm=58',
//     role: [1],
//     created_at: '2019-01-05 16:23:12',
//     updated_at: '2019-03-11 08:13:34',
//     last_login_time: '2019-05-03 11:45:32',
//     last_login_ip: '113.66.104.131'
// },

const dataSet = [
    {
        id: 3,
        username: 'joke',
        password: 'abc123'
    },
    {
        id: 5,
        username: 'nero',
        password: '34dg345'
    }
]

@Injectable()
export class AccountService {
    async findAll(): Promise<Account[]> {
        return dataSet
    }

    async findOne(id: number) {
        const result = _.find(dataSet, n => n.id === id)
        Logger.verbose(`result: ${JSON.stringify(result)}`)
        return result
    }

    async create(dto: SignUpDto): Promise<number> {
        return 1
    }

    async update() {}
}
