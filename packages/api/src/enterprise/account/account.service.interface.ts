import { Account } from './account.interface'
import * as DTO from './account.dto'

export interface AccountServiceInterface {
    findAll(): Promise<Account[]>

    findOne(id: number): Promise<Account>

    signUp(dto: DTO.SignUp)

    updateProfile()
}
