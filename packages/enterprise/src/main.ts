import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { EnterpriseModule } from './enterprise/enterprise.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { HttpExceptionFilter } from './common/filters/http.exception.filter'
import { APISetting } from '@mazongguan/common'
import chalk from 'chalk'

export class APIEnterprise {
    private url: string
    private app: NestFastifyApplication

    constructor(private setting: APISetting) {
        this.url = `${this.setting.protocol}://${this.setting.host}:${this.setting.port}`
    }

    private async setupApp() {
        this.app = await NestFactory.create<NestFastifyApplication>(EnterpriseModule, new FastifyAdapter())
        this.app.useGlobalFilters(new HttpExceptionFilter())
    }

    private setupSwagger() {
        const option = new DocumentBuilder()
            .setTitle(this.setting.doc.title)
            .setDescription(this.setting.doc.description)
            .setVersion(this.setting.doc.version)
            .build()
        const document = SwaggerModule.createDocument(this.app, option)
        SwaggerModule.setup(this.setting.doc.url, this.app, document)
    }

    async start() {
        Logger.log('Start up mazongguan enterprise API server...')
        try {
            await this.setupApp()
            this.setupSwagger()
            await this.app.listen(this.setting.port, this.setting.host)
        } catch (err) {
            Logger.error('An error occured while starting up server')
            Logger.error(err.stack)
        }
        Logger.log(`API address: ${chalk.blue(this.url)}`)
        Logger.log(`Document address: ${chalk.blue(`${this.url}${this.setting.doc.url}`)}`)
    }
}
