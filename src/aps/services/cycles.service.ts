import { Injectable, Logger } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cycle } from '../schemas/cycles.schema';

@Injectable()
export class CyclesService {
  logger: Logger;
  constructor(@InjectModel(Cycle.name, 'aps')
  private cyclesModel: mongoose.Model<Cycle>) {
  }

  async create(cycles: Cycle): Promise<Cycle> {
    const res = await this.cyclesModel.create(cycles)
    return res
  }

  async findAll(): Promise<Cycle[]> {
    const cycles = await this.cyclesModel.find()
    return cycles
  }

  async findByApsNv(apsId: number, nvId: number): Promise<Cycle[]> {
    if (!apsId && !nvId) {
      const cycles = await this.cyclesModel.find()
      return cycles
    }
    else if (!apsId && nvId) {
      const cycles = await this.cyclesModel.find({ nvId: nvId })
      return cycles
    }

    else if (apsId && !nvId) {
      const cycles = await this.cyclesModel.find({ apsId: apsId })
      return cycles
    }
    const cycles = await this.cyclesModel.find({ apsId: apsId, nvId: nvId })
    return cycles
  }

  async findById(id: string): Promise<Cycle> {
    const cycle = await this.cyclesModel.findById(id)
    return cycle;
  }

  async findOne(query: any): Promise<any> {
    const cycle = await this.cyclesModel.findOne(query).exec();
    return cycle
  }

  async update(id: string, upUser: Cycle) {
    const cycle = await this.cyclesModel.findByIdAndUpdate(id, upUser)
    return cycle;
  }

  async remove(id: string) {
    const cycle = await this.cyclesModel.findByIdAndDelete(id)
    return cycle;
  }
}
