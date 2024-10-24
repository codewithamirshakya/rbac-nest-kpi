
export class SkillResponseDto {
    id: string;
    skill_name: string;

    constructor(skill: any) {
        this.id = skill._id?.toString();
        this.skill_name = skill?.skill_name;
    }
}