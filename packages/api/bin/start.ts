import { MazongguanAPI } from '../src'
import * as path from 'path'
;(async () => {
    try {
        await new MazongguanAPI(path.join(__dirname, './local_dev.yaml')).start()
    } catch (e) {
        console.error(e)
    }
})()
