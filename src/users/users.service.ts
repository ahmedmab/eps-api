import { Injectable, Logger } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
  logger: Logger;
  constructor(@InjectModel(User.name)
  private userModel: mongoose.Model<User>) {
  }

  async create(user: User): Promise<User> {
    const res = await this.userModel.create(user)
    return res
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find()
    return users
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id)
    return user;
  }

  async findOne(query: any): Promise<any> {
    const user = await this.userModel.findOne(query).exec();
    return user
  }

  async update(id: string, upUser: User) {
    const user = await this.userModel.findByIdAndUpdate(id, upUser)
    return user;
  }

  async updateRole(id: string, newRole: { role: string }) {
    const user = await this.userModel.findByIdAndUpdate(id, { $set: newRole })
    return user;
  }

  async updateStatus(id: string, status: { status: number }) {
    const user = await this.userModel.findByIdAndUpdate(id, { $set: status })
    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id)
    return user;
  }
}
