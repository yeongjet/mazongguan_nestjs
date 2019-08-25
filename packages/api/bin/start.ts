import { APISetting, LogLevel } from '@mazongguan/common'
import { MazongguanAPI } from '../src'

const option: APISetting = {
    protocol: 'http',
    host: 'localhost',
    port: 3000,
    logLevel: LogLevel.LOG,
    database: {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'yeongjet',
        password: 'qwe123',
        database: 'mzgdev',
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
;(async () => {
    try {
        await new MazongguanAPI(option).start()
    } catch (e) {
        console.error(e)
    }
})()
