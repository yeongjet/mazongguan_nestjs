import { Account } from './account.interface'
import { SignUpDto } from '../../dto/account/account.dto'

export interface AccountServiceInterface {
    findAll(): Promise<Account[]>

    findOne(id: number): Promise<Account>

    signUp(dto: SignUpDto)

    updateProfile()
}
