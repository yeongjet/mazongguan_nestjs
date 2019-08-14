const { APIEnterprise } = require('../lib')

new APIEnterprise({
    host: 'localhost',
    port: 3000,
    logLevel: 'silly',
    lxd: {
        cert: fs.readFileSync(path.join(ROOT, certPath)),
        key: fs.readFileSync(path.join(ROOT, keyPath))
    },
    docUrl: '/api/v1/doc',
    database: {
        host: 'localhost',
        port: 5432,
        username: 'yeongjet',
        password: 'qwe123',
        database: 'mzgdev'
    }
}).run()
