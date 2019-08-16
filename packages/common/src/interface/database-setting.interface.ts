export interface DatabaseSetting {
    type: string
    host: string
    username: string
    password: string
    database: string
    port: number
    synchronize: boolean,
    logging: boolean
}
