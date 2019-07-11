import { Member } from './member.interface'

export interface IMemberService {
    findAll(): Promise<Member[]>

    findOne(id: number): Promise<Member>

    signUp()

    updateProfile()
}
