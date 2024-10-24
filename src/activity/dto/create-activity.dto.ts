import { IsArray, IsDateString, IsMongoId, IsNotEmpty, IsString, Length } from 'class-validator';
import { Types } from 'mongoose';
import { dateGreater } from '../../validators/date-greater';
export class CreateActivityDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsDateString()
    @IsNotEmpty()
    startdate: string;

    @IsDateString()
    @IsNotEmpty()
    @dateGreater('startdate', { message: 'enddate must be greater than startdate' })
    enddate: string;

    @IsNotEmpty()

    skill: Types.ObjectId;

    @IsNotEmpty()
    @IsArray()
    @IsMongoId({ each: true })
    participants: Types.ObjectId[];
}
