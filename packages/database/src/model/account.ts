import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('account')
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 50,
        default: ''
    })
    username: string

    @Column({
        type: 'varchar',
        length: 50,
        default: ''
    })
    password: string
}
