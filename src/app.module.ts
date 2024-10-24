// src/app.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityModule } from './activity/activity.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { SeederService } from './seeder/seeder.service';
import { SkillController } from './skill/skill.controller';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';
import { User, UserSchema } from './user/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Replace with your MongoDB URI
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
    AuthModule,
    SkillModule,
    ActivityModule,
    JwtModule.register({
      secret: 'test',
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  controllers: [AuthController, SkillController],
  providers: [SeederService],
})
export class AppModule { }
