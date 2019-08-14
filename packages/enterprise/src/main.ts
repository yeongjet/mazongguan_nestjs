import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { HttpExceptionFilter } from './common/filters/http.exception.filter'
import { APISetting } from '@mazongguan/common'
import chalk from 'chalk'

export class APIEnterprise {
    private app: NestFastifyApplication

    constructor(private setting: APISetting) {}

    private setupSwagger() {
        const option = new DocumentBuilder()
            .setTitle(this.setting.doc.title)
            .setDescription(this.setting.doc.description)
            .setVersion(this.setting.doc.version)
            .build()
        const document = SwaggerModule.createDocument(this.app, option)
        SwaggerModule.setup(this.setting.doc.url, this.app, document)
    }

    private async setupApp() {
        this.app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
        this.app.useGlobalFilters(new HttpExceptionFilter())
    }

    async start() {
        Logger.log('Start up mazongguan enterprise API server...')
        try {
            await this.setupSwagger()
            await this.setupApp()
            await this.app.listen(this.setting.port, this.setting.host)
        } catch (err) {
            Logger.error('An error occured while starting up server')
            Logger.error(err.message)
        }
        Logger.log(`API address: ${chalk.blue(this.setting.host + this.setting.port)}`)
        Logger.log(`Document address: ${chalk.yellow(this.setting.host + this.setting.port + this.setting.doc.url)}`)
    }
}
