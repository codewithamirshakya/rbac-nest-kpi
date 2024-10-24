import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/user/user.schema';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activity')

export class ActivityController {
  constructor(private readonly activityService: ActivityService) { }

  @Post()
  @ApiBearerAuth()
  @Roles(Role.EXPERT)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.create(createActivityDto);
  }

  @Get(':skill_id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Param('skill_id') skillId: string) {
    const activities = await this.activityService.findAll(skillId);
    console.log(activities);
    return activities;
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.activityService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles(Role.EXPERT)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activityService.update(id, updateActivityDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @Roles(Role.EXPERT)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async remove(@Param('id') id: string) {
    const response = await this.activityService.remove(id);

    return {
      'message': 'Removed successfully',
    }
  }
}
