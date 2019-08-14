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
        host: process.env.POSTGRES_HOST || 'localhost',
        port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
        username: process.env.POSTGRES_USER || 'lxdhub',
        password: process.env.POSTGRES_PASSWORD || 'lxdhub',
        database: process.env.POSTGRES_DATABASE || 'lxdhub'
    }
}).run()
