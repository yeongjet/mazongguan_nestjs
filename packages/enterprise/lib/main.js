"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const http_exception_filter_1 = require("./common/filters/http.exception.filter");
const chalk_1 = require("chalk");
class APIEnterprise {
    constructor(setting) {
        this.setting = setting;
    }
    setupSwagger() {
        const option = new swagger_1.DocumentBuilder()
            .setTitle(this.setting.doc.title)
            .setDescription(this.setting.doc.description)
            .setVersion(this.setting.doc.version)
            .build();
        const document = swagger_1.SwaggerModule.createDocument(this.app, option);
        swagger_1.SwaggerModule.setup(this.setting.doc.url, this.app, document);
    }
    async setupApp() {
        this.app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
        this.app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    }
    async start() {
        common_1.Logger.log('Start up mazongguan enterprise API server...');
        try {
            await this.setupSwagger();
            await this.setupApp();
            await this.app.listen(this.setting.port, this.setting.host);
        }
        catch (err) {
            common_1.Logger.error('An error occured while starting up server');
            common_1.Logger.error(err.message);
        }
        common_1.Logger.log(`API address: ${chalk_1.default.blue(this.setting.host + this.setting.port)}`);
        common_1.Logger.log(`Document address: ${chalk_1.default.yellow(this.setting.host + this.setting.port + this.setting.doc.url)}`);
    }
}
exports.APIEnterprise = APIEnterprise;
