import { Injectable } from '@nestjs/common'
import { BP } from './bp.interface'
import { BPServiceInterface } from './bp.service.interface'

@Injectable()
export class BPService implements BPServiceInterface {
    async findAll(): Promise<BP[]> {
        return [
            {
                user_id: 3,
                username: 'joke',
                password: 'abc123',
                email: '625436194@163.com',
                cellphone: '153254785',
                avatar_url:
                    'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3001292911,2962166647&fm=58',
                role: [1],
                created_at: '2019-01-05 16:23:12',
                updated_at: '2019-03-11 08:13:34',
                last_login_time: '2019-05-03 11:45:32',
                last_login_ip: '113.66.104.131'
            }
        ]
    }

    async findOne(id: number): Promise<BP> {
        return {
            user_id: 3,
            username: 'joke',
            password: 'abc123',
            email: '625436194@163.com',
            cellphone: '153254785',
            avatar_url:
                'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3001292911,2962166647&fm=58',
            role: [1],
            created_at: '2019-01-05 16:23:12',
            updated_at: '2019-03-11 08:13:34',
            last_login_time: '2019-05-03 11:45:32',
            last_login_ip: '113.66.104.131'
        }
    }

    async signUp() {}

    async updateProfile() {}
}
