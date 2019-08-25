export interface DatabaseSetting {
    type: 'postgres' | 'cockroachdb' | 'mongodb'
    host: string
    port: number
    username: string
    password: string
    database: string
    synchronize: boolean
    logging: boolean
}
