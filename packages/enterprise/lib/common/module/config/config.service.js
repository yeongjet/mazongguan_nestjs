"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigService {
    constructor(filePath) {
        // this.envConfig = dotenv.parse(fs.readFileSync(filePath))
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
