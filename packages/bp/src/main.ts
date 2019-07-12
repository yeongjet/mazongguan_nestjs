import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
    FastifyAdapter,
    NestFastifyApplication
} from '@nestjs/platform-fastify'
import { APIParamsValidationPipe } from './common/pipe/api-params-validation.pipe'
;(async () => {
    console.log('start up..')
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    )
    // app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(new APIParamsValidationPipe())
    await app.listen(3000)
})()
