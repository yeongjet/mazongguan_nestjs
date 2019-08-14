import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { HttpExceptionFilter } from './common/filters/http.exception.filter'
import { APISettings } from '@mazongguan/common'

export class APIEnterprise {
    constructor(private setting: APISettings, private server)
}
;(async () => {
    console.log('start up..')
    try {
        const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
        app.useGlobalFilters(new HttpExceptionFilter())
        SwaggerModule.setup(
            'api/enterprise',
            app,
            SwaggerModule.createDocument(
                app,
                new DocumentBuilder()
                    .setTitle('MZG API(Enterprise)')
                    .setDescription('码总管企业端文档')
                    .setVersion('1.0')
                    .addTag('账号')
                    .build()
            )
        )
        //app.useGlobalPipes(new ValidationPipe())
        await app.listen(3000)
    } catch (e) {
        console.log(e)
    }
})()
