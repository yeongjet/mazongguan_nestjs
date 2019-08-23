import { APISetting, LogLevel } from '@mazongguan/common'
import { MazongguanAPI } from '../src'

const option: APISetting = {
    protocol: 'http',
    port: 3000,
    host: 'localhost',
    logLevel: LogLevel.LOG,
    database: {
        host: 'localhost',
        username: 'yeongjet',
        password: 'qwe123',
        database: 'mzgdev',
        port: 5432,
        logging: true,
        synchronize: true
    },
    document: {
        title: 'Mazongguan Enterprise API',
        description: '码总管企业端文档',
        version: '1.0',
        url: '/api/enterprise'
    }
}

new MazongguanAPI(option).start()
