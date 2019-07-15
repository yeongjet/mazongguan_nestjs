import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { HttpExceptionFilter } from './common/filters/http.exception.filter'

;(async () => {
    console.log('start up..')
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    )
    app.useGlobalFilters(new HttpExceptionFilter())
    //app.useGlobalPipes(new ValidationPipe())
    await app.listen(3000)
})()
