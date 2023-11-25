import { Injectable, Logger } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Quiz } from '../schemas/quiz.schema';

@Injectable()
export class QuizService {
  logger: Logger;
  constructor(@InjectModel(Quiz.name, 'aps')
  private quizModel: mongoose.Model<Quiz>) {
  }

  async create(quiz: Quiz): Promise<Quiz> {
    const res = await this.quizModel.create(quiz)
    return res
  }

  async findAll(): Promise<Quiz[]> {
    const users = await this.quizModel.find()
    return users
  }

  async findByAps(apsId: number): Promise<Quiz[]> {
    if (!apsId) {
      const users = await this.quizModel.find()
      return users
    }
    const users = await this.quizModel.find({ apsId: apsId })
    return users
  }

  async findById(id: string): Promise<Quiz> {
    const user = await this.quizModel.findById(id)
    return user;
  }

  async findOne(query: any): Promise<any> {
    const user = await this.quizModel.findOne(query).exec();
    return user
  }

  async update(id: string, upUser: Quiz) {
    const user = await this.quizModel.findByIdAndUpdate(id, upUser)
    return user;
  }

  async remove(id: string) {
    const user = await this.quizModel.findByIdAndDelete(id)
    return user;
  }
}
