import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name)
  private userModel: mongoose.Model<User>) { }

  async create(user: User): Promise<User> {
    const res = await this.userModel.create(user)
    return res
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find()
    return users
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id)
    return user;
  }

  async update(id: string) {
    const user = await this.userModel.findByIdAndUpdate(id)
    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id)
    return user;
  }
}
