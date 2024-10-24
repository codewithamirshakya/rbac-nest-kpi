import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(username: string, password: string): Promise<User | null> {
        const user = await this.userService.findOne(username);
        if (user && user.password === password) {
            return user;
        }
        throw new UnauthorizedException('Invalid credentials');
    }

    async login(user: User) {
        const payload = { username: user.username, sub: user.id, roles: user.roles };
        return {
            token: this.jwtService.sign(payload),
            profile: user
        };
    }

    async logout(user: User) {
        const payload = { username: user.username, sub: user.id, roles: user.roles };
        return {
            token: this.jwtService.sign(payload),
            profile: user
        };
    }
}
