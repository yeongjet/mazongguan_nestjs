import { Admin } from './admin.interface'
import * as DTO from './admin.dto'

export interface AdminServiceInterface {
    findAll(): Promise<Admin[]>

    findOne(id: number): Promise<Admin>

    signUp(dto: DTO.SignUp)

    updateProfile()
}
