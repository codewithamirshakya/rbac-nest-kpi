// src/Activity/Activity.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Skill } from 'src/skill/skill.schema';


@Schema()
export class Activity extends Document {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    startdate: Date;

    @Prop({ required: true })
    enddate: Date;

    @Prop({ type: Types.ObjectId, ref: 'Skill', required: true })
    skill: Skill;

    @Prop({ type: [{ type: String, ref: 'User' }] })
    participants: string[];
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
