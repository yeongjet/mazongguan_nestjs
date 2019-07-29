import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { HttpExceptionFilter } from './common/filters/http.exception.filter'
;(async () => {
    console.log('start up..')
    try {
        const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
        app.useGlobalFilters(new HttpExceptionFilter())
        const options = new DocumentBuilder()
            .setTitle('码总管API文档')
            .setDescription('包括小程序端　BP端')
            .setVersion('1.0')
            .addTag('账号')
            .build()
        const document = SwaggerModule.createDocument(app, options)
        SwaggerModule.setup('api', app, document)
        //app.useGlobalPipes(new ValidationPipe())
        await app.listen(3000)
    } catch (e) {
        console.log(e)
    }
})()
