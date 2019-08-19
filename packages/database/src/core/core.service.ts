import { Inject, Injectable } from '@nestjs/common'
import { Connection, Repository } from 'typeorm'

@Injectable()
export class CoreService {
    constructor(@Inject('Connection') public connection: Connection) {}

    async getRepository<T>(entity: any): Promise<Repository<T>> {
        return this.connection.getRepository(entity)
    }

    async closeConnection() {
        if (this.connection.isConnected) {
            await this.connection.close()
        }
    }
}
