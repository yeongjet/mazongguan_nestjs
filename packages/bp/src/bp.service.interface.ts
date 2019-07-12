import { BP } from './bp.interface'

export interface BPServiceInterface {
    findAll(): Promise<BP[]>

    findOne(id: number): Promise<BP>

    signUp()

    updateProfile()
}
