import { Injectable, Logger } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cycles } from '../schemas/cycles.schema';

@Injectable()
export class CyclesService {
  logger: Logger;
  constructor(@InjectModel(Cycles.name, 'aps')
  private cyclesModel: mongoose.Model<Cycles>) {
  }

  async create(cycles: Cycles): Promise<Cycles> {
    const res = await this.cyclesModel.create(cycles)
    return res
  }

  async findAll(): Promise<Cycles[]> {
    const cycles = await this.cyclesModel.find()
    return cycles
  }

  async findByAps(apsId: number): Promise<Cycles[]> {
    if (!apsId) {
      const cycles = await this.cyclesModel.find()
      return cycles
    }
    const cycles = await this.cyclesModel.find({ apsId: apsId })
    return cycles
  }

  async findById(id: string): Promise<Cycles> {
    const cycle = await this.cyclesModel.findById(id)
    return cycle;
  }

  async findOne(query: any): Promise<any> {
    const cycle = await this.cyclesModel.findOne(query).exec();
    return cycle
  }

  async update(id: string, upUser: Cycles) {
    const cycle = await this.cyclesModel.findByIdAndUpdate(id, upUser)
    return cycle;
  }

  async remove(id: string) {
    const cycle = await this.cyclesModel.findByIdAndDelete(id)
    return cycle;
  }
}
