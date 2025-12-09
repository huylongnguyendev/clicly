import "dotenv/config"
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: process.env.DATABASE_URL,
    credentials: true
  })
  app.setGlobalPrefix("api/v1")
  await app.listen(process.env.PORT ?? 8000)
}
bootstrap().catch(error => {
  console.log("Lỗi khi khởi động app", error)
})
