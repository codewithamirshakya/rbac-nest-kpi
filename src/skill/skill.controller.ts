import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillResponseDto } from './dto/skill-response.dto';
import { SkillService } from './skill.service';

@Controller('skill')

export class SkillController {
  constructor(private readonly skillService: SkillService) { }

  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
  }

  @Get()
  async findAll(): Promise<SkillResponseDto[]> {
    const skills = await this.skillService.findAll();
    return skills.map(skill => new SkillResponseDto(skill));
  }
}
