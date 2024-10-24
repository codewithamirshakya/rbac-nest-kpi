// src/seeder/seeder.service.ts
import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from '../skill/dto/create-skill.dto';
import { SkillService } from '../skill/skill.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { Role, User } from '../user/user.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class SeederService {
    constructor(
        private readonly userService: UserService,
        private readonly skillService: SkillService
    ) { }

    async seed() {
        console.log('Seeding');
        try {
            // await this.seedSkill();
        } catch (err) {

        }

        try {
            await this.seedUser();
        } catch (err) {

        }

    }

    async seedUser() {
        const adminUser = {
            username: 'admin',
            password: 'admin',
            roles: [Role.ADMIN],
            name: 'admin',
            email: 'admin@admin.com',
            skill: ['67198db8c67491d6d3351c9b'],
        };

        const regularUser = {
            username: 'user',
            password: 'user',
            roles: [Role.USER],
            name: 'user',
            email: 'user@user.com',
            skills: ['67198db8c67491d6d3351c9b'],
        };

        // Create users
        await this.userService.create(new User(adminUser) as CreateUserDto);
        await this.userService.create(new User(regularUser) as CreateUserDto);

        console.log('Seeded users: Admin and Regular User');
    }

    async seedSkill() {
        const skills = [
            {
                skill_name: 'PHP',
            },
            {
                skill_name: 'Javascript',
            }
        ];

        skills.forEach((skill) => {
            this.skillService.create(skill as CreateSkillDto);
        });


        console.log('Seeded skills');
    }
}
