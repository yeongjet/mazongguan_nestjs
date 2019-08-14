const { APIEnterprise } = require('../lib')
const { APISetting } = require('@mazongguan/common')
new APIEnterprise({
    host: 'localhost',
    port: 3000,
    logLevel: 'silly',
    doc: {
        url: '/api/v1/doc'
    },
    database: {
        host: 'localhost',
        port: 5432,
        username: 'yeongjet',
        password: 'qwe123',
        database: 'mzgdev'
    }
}).run()
