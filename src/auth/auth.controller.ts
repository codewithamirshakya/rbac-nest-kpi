// src/auth/auth.controller.ts
import { Body, Controller, Get, Post, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Role } from 'src/user/user.schema';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService
    ) { }

    @Post('login')
    async login(@Body() login: LoginDto) {
        const validatedUser = await this.authService.validateUser(login.username, login.password);
        if (!validatedUser) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return this.authService.login(validatedUser);
    }

    @Get('logout')
    async logout(@Res() res: Response) {
        return {
            'message': 'Logout'
        }
    }


    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get('admin')
    @ApiBearerAuth()
    @Roles(Role.BOARD)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    getAdminData() {
        return 'This is admin data';
    }

}
