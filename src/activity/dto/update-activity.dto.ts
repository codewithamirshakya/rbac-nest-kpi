import { PartialType } from '@nestjs/swagger';
import { IsArray, IsDateString, IsMongoId, IsOptional, IsString, Length } from 'class-validator';
import { Types } from 'mongoose';
import { dateGreater } from '../../validators/date-greater';
import { CreateActivityDto } from './create-activity.dto';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
    @IsString()
    @IsOptional()
    @Length(3, 20)
    title: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsDateString()
    @IsOptional()
    startdate: string;

    @IsDateString()
    @IsOptional()
    @dateGreater('startdate', { message: 'enddate must be greater than startdate' })
    enddate: string;

    @IsOptional()
    @IsMongoId({ each: true })
    skill: Types.ObjectId;

    @IsOptional()
    @IsArray()
    @IsMongoId({ each: true })
    participants: Types.ObjectId[];
}
