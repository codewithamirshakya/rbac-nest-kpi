import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSkillDto } from './dto/create-skill.dto';
import { Skill, SkillDocument } from './skill.schema';

@Injectable()
export class SkillService {
  constructor(
    @InjectModel(Skill.name)
    private skillModel: Model<Skill>,
  ) { }

  async findAll(): Promise<SkillDocument[]> {
    return this.skillModel.find().exec();
  }


  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const existingUser = await this.skillModel.findOne({ skill_name: createSkillDto.skill_name });
    if (existingUser) {
      throw new ConflictException('Skill already exists');
    }

    const newSkill = new this.skillModel({
      ...createSkillDto,
    });

    return await newSkill.save();
  }
}
