import { User } from "src/user/user.schema";
import { Activity } from "../activity.schema";


export class ActivityResponseDto {
    id: string;
    title: string;
    description: string;
    startdate: Date;
    enddate: Date;
    skill: string;
    participants: User[];

    constructor(activity: Activity) {
        this.id = activity._id?.toString();
        this.title = activity.title;
        this.description = activity.description;
        this.startdate = activity.startdate;
        this.enddate = activity.enddate;
        // this.skill = activity.skill;
        // this.skill = new SkillResponseDto(activity.skill);
        // this.participants = activity.participants.map(participant => new UserResponseDto(participant));
    }
}