import { BP } from './bp.interface'
import * as BPDTO from './bp.dto'

export interface BPServiceInterface {
    findAll(): Promise<BP[]>

    findOne(id: number): Promise<BP>

    signUp(dto: BPDTO.SignUpDto)

    updateProfile()
}
