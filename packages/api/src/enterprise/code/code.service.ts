import { Injectable, Logger } from '@nestjs/common'
import { Code } from '@mazongguan/database'
import { SignUpDto } from './dto'
import * as _ from 'lodash'

@Injectable()
export class CodeService {
    async findAll(): Promise<Code[]> {
        return [{}] as any
    }

    async findOne(id: number) {
        return 1
    }

    async create(dto: SignUpDto): Promise<number> {
        return 1
    }
}
