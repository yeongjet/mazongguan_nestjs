import { BP } from './bp.interface'

export interface IBPService {
    findAll(): Promise<BP[]>

    findOne(id: number): Promise<BP>

    signUp()

    updateProfile()
}
