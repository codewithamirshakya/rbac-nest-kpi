import { IsArray, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
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

    @IsArray()
    @IsNotEmpty()
    skills: Skill[];

    @IsNotEmpty()
    @IsArray()
    roles: string[];

    @IsNotEmpty()
    @IsString()
    name: string;
}
