import { Injectable, Logger } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Observable } from '../schemas/observable.schema';

@Injectable()
export class ObservableService {
  logger: Logger;
  constructor(@InjectModel(Observable.name, 'aps')
  private observableModel: mongoose.Model<Observable>) {
  }

  async create(observable: Observable): Promise<Observable> {
    const res = await this.observableModel.create(observable)
    return res
  }

  async findAll(): Promise<Observable[]> {
    const observables = await this.observableModel.find()
    return observables
  }

  async findByCriteria(apsId: number, nvId: number): Promise<Observable[]> {
    if (!apsId) {
      const observables = await this.observableModel.find()
      return observables
    }
    const observables = await this.observableModel.find({
      $or: [
        { apsId: apsId },
        { nvId: nvId }
      ]
    })
    return observables
  }

  async findById(id: string): Promise<Observable> {
    const observable = await this.observableModel.findById(id)
    return observable;
  }

  async findOne(query: any): Promise<any> {
    const observable = await this.observableModel.findOne(query).exec();
    return observable
  }

  async update(id: string, upUser: Observable) {
    const observable = await this.observableModel.findByIdAndUpdate(id, upUser)
    return observable;
  }

  async remove(id: string) {
    const observable = await this.observableModel.findByIdAndDelete(id)
    return observable;
  }
}
