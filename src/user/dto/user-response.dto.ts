import { Type } from "class-transformer";
import { SkillResponseDto } from "../../skill/dto/skill-response.dto";
import { Skill } from "../../skill/skill.schema";
import { UserDocument } from "../user.schema";


export class UserResponseDto {
    id: string;
    name: string;
    username: string;
    email: string;
    @Type(() => Skill)
    skill: Skill;

    constructor(user: UserDocument) {

        this.id = user._id.toString();
        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.skill = new SkillResponseDto(user.skill);
    }
}