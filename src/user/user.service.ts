// src/user/user.service.ts
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }


    async findOne(username: string): Promise<User | null> {
        return this.userModel.findOne({ username }).exec();
    }

    async findAll(): Promise<UserDocument[]> {
        return this.userModel.find().populate('skill').exec();
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const existingUser = await this.userModel.findOne({ email: createUserDto.email });
        if (existingUser) {
            throw new ConflictException('User already exists');
        }

        const hashedPassword = createUserDto.password;
        const newUser = new this.userModel({
            ...createUserDto,
            password: hashedPassword,
        });

        return await newUser.save();
    }
}
