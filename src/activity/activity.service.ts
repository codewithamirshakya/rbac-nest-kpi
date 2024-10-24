import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Activity } from './activity.schema';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectModel(Activity.name)
    private activityModel: Model<Activity>,
  ) { }

  create(createActivityDto: CreateActivityDto) {
    return this.activityModel.create(createActivityDto);
  }

  findAll(skillId: string) {
    return this.activityModel.find({ skill: skillId }).populate('skill').populate('participants', 'username email').exec();
  }

  findOne(id: string) {
    return this.activityModel.findById(id)
      .populate('participants', 'username email')
      .populate('skill').exec();
  }

  async update(id: string, updateActivityDto: UpdateActivityDto): Promise<Activity> {

    return this.activityModel.findByIdAndUpdate(id, updateActivityDto, { new: true }).exec();
  }

  async remove(id: string): Promise<boolean> {

    const result = await this.activityModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new HttpException('Data cannot be processed', 422);
    }
    return true;
  }
}
