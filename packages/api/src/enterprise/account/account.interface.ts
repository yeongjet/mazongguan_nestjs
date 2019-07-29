export interface Account {
    readonly user_id: number
    readonly username: string
    readonly password: string
    readonly email: string
    readonly cellphone: string
    readonly avatar_url: string
    readonly role: number[]
    readonly created_at: string
    readonly updated_at: string
    readonly last_login_time: string
    readonly last_login_ip: string
}
