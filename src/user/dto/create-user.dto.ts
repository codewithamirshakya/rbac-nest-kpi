import { IsEmail, IsMongoId, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { Skill } from '../../skill/skill.schema';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    password: string;

    @IsString()
    @IsOptional()
    @IsMongoId({ each: true })
    skill: Skill;

    @IsNotEmpty()
    @IsString()
    role: string;

    @IsNotEmpty()
    @IsString()
    name: string;
}
