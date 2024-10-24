import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeederService } from './seeder/seeder.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const seederService = app.get(SeederService);
    
    await seederService.seed();
    
    await app.close();
}

bootstrap()
    .then(() => console.log('Seeding completed'))
    .catch((err) => console.error('Seeding failed', err));
