import { Admin } from './admin.interface'
import * as dto from './admin.dto'

export interface AdminServiceInterface {
    findAll(): Promise<Admin[]>

    findOne(id: number): Promise<Admin>

    signUp(dto: dto.Signup)

    updateProfile()
}
