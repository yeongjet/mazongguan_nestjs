export interface Member {
    readonly user_id: number
    readonly username: string
    readonly password: string
    readonly email: string
    readonly telephone: string
    readonly cellphone: string
    readonly avatar_url: string
    readonly role: number[]
    readonly create_time: string
    readonly update_profile_time: string
    readonly last_login_time: string
    readonly last_login_ip: string
}
