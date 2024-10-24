import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillResponseDto } from './dto/skill-response.dto';
import { SkillService } from './skill.service';

@Controller('skill')
@ApiBearerAuth()
export class SkillController {
  constructor(private readonly skillService: SkillService) { }

  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillService.create(createSkillDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<SkillResponseDto[]> {
    const skills = await this.skillService.findAll();
    return skills.map(skill => new SkillResponseDto(skill));
  }
}
