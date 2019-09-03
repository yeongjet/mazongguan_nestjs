import 'reflect-metadata'
import * as fs from 'fs'
import * as YAML from 'yaml'
// import * as compression from 'fastify-compress'
import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { plainToClass } from 'class-transformer'
import { APIModule } from './api.module'
import { HttpExceptionFilter } from './common'
import { APISetting } from '@mazongguan/common'
import chalk from 'chalk'

export class MazongguanAPI {
    private readonly url: string
    private readonly setting: APISetting
    private app: NestFastifyApplication

    constructor(filePath: string) {
        this.setting = plainToClass(APISetting, YAML.parse(fs.readFileSync(filePath, 'utf-8')))
        this.url = `${this.setting.protocol}://${this.setting.host}:${this.setting.port}`
    }

    private async setupApp() {
        this.app = await NestFactory.create<NestFastifyApplication>(APIModule.forRoot(this.setting), new FastifyAdapter())
        // this.app.use(compression())
        this.app.useGlobalFilters(new HttpExceptionFilter())
    }

    private setupDocument() {
        const option = new DocumentBuilder()
            .setTitle(this.setting.document.title)
            .setDescription(this.setting.document.description)
            .setVersion(this.setting.document.version)
            .build()
        const document = SwaggerModule.createDocument(this.app, option)
        SwaggerModule.setup(this.setting.document.url, this.app, document)
    }

    async start() {
        Logger.log('Start up mazongguan enterprise API server...')
        try {
            await this.setupApp()
            this.setupDocument()
            await this.app.listen(this.setting.port, this.setting.host)
        } catch (err) {
            Logger.error('An error occured while starting up server')
            Logger.error(err.stack)
        }
        Logger.log(`API address: ${chalk.blue(this.url)}`)
        Logger.log(`Document address: ${chalk.blue(`${this.url}${this.setting.document.url}`)}`)
    }
}
