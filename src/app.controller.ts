// src/app.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './auth/roles.decorator';
import { RolesGuard } from './auth/roles.guard';
import { Role } from './user/user.schema';

@Controller('app')
export class AppController {
  @Get('admin')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  getAdminData() {
    return 'This is admin data';
  }

  @Get('user')
  @UseGuards(AuthGuard('jwt'))
  getUserData() {
    return 'This is user data';
  }
}
