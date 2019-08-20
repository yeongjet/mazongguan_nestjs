import { Column, Entity, Index, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@Index(['company_id', 'no'], { unique: true })
export class Code {
    @Index()
    @Column({ type: 'int8', nullable: false, comment: '批次号' })
    batch_id: number

    @Column({ type: 'int8', nullable: false, comment: '企业id' })
    company_id: number

    @PrimaryColumn({ type: 'string', nullable: false, comment: '原始码' })
    key: string

    @Column({ type: 'int2', nullable: false, comment: '码定义类型: 1.微信 2.自定义' })
    code_define_type: number

    @Column({ type: 'int2', nullable: false, comment: '码类型: 1.内码 2.外码 3.中盒码 4.箱子 5.托盘' })
    code_type: number

    @Column({ type: 'int2', nullable: false, comment: '标类型: 1.单标(1个内码) 2.双标(1个内码+1个外码) 3.套标(1个箱码+N个内码+N个外码)' })
    label_type: number

    @Column({ type: 'int8', nullable: false, comment: '微信序号' })
    index: number

    @Index()
    @Column({ type: 'string', nullable: false, comment: '自定义编号' })
    no: string

    @Index()
    @Column({ type: 'string', nullable: false, comment: '父级的原始码' })
    relate_key: string

    @Column({ type: 'int2', nullable: true, comment: '父级的码类型' })
    relate_type: number

    @Index()
    @Column({ type: 'int8', nullable: false, comment: '订单号' })
    order_id: string

    @Column({ type: 'int8', nullable: true, comment: '商品id' })
    product_id: number

    @Column({ type: 'int8', nullable: false, comment: '激活状态: 0.未激活 1.已激活 2.采集来的二次激活 3：本系统已关闭' })
    activate_status: number

    @Column({ type: 'int8', nullable: true, comment: '最后激活时间' })
    activate_time: number

    @Column({ type: 'int8', nullable: true, comment: '微信01码' })
    wx_binary_data: string

    @Column({ type: 'int8', nullable: true, comment: '微信qr码' })
    wx_qrcode_data: string
}
