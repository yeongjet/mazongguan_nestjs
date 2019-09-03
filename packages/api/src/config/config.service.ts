import { APISetting } from '@mazongguan/common'

export class ConfigService {
    readonly setting: APISetting

    constructor(setting?: APISetting) {
        this.setting = setting
    }
}
