import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app.module'

import {
    FastifyAdapter,
    NestFastifyApplication
} from '@nestjs/platform-fastify'

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        ApplicationModule,
        new FastifyAdapter()
    )
    await app.listen(3000)
}

bootstrap()
