import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateSkillDto {

    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    skill_name: string;
}
