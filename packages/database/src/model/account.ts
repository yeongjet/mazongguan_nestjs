import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('account')
export class Account {
    @PrimaryGeneratedColumn({ type: 'int4', comment: '主键id' })
    id: number

    @Column({ type: 'string', nullable: false, comment: '用户名' })
    username: string

    @Column({ type: 'string', nullable: false, comment: '密码' })
    password: string
}
