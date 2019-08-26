import { Injectable, Logger } from '@nestjs/common'
import { Code } from '@mazongguan/database'
import { CreateDto } from './dto'
import * as _ from 'lodash'

@Injectable()
export class BatchService {
    async findAll(): Promise<Code[]> {
        return [{}] as any
    }

    async findOne(id: number) {
        return 1
    }

    async create(dto: CreateDto): Promise<number> {
        return 1
    }
}
