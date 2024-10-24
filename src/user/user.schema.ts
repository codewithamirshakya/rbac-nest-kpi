// src/user/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Skill } from '../skill/skill.schema';

export enum Role {
    BOARD = 'board',
    EXPERT = 'expert',
    TRAINER = 'trainer',
    COMPETITOR = 'competitor',
}

export type UserDocument = User & Document;


@Schema()
export class User extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: Types.ObjectId, ref: Skill.name })
    skill: Skill;

    @Prop({ default: [Role.BOARD] })
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
