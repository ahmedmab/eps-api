import { Injectable } from '@nestjs/common';
import { Academie } from './schemas/academie.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Direction } from './schemas/direction.schema';
import { Vacance } from './schemas/vacance.schema';

@Injectable()
export class DataService {
  constructor(
    @InjectModel(Academie.name) private academieModel: mongoose.Model<Academie>,
    @InjectModel(Direction.name)
    private directionModel: mongoose.Model<Direction>,
    @InjectModel(Vacance.name) private vacanceModel: mongoose.Model<Vacance>,
  ) {}

  async findAllAcademie(): Promise<Academie[]> {
    const academies = await this.academieModel.find();
    return academies;
  }

  async findAllDirection(): Promise<Direction[]> {
    const directions = await this.directionModel.find();
    return directions;
  }

  async findDirectionsByAcademie(query: any): Promise<any> {
    const directions = await this.directionModel.find(query).exec();
    return directions;
  }

  // Vacances
  async create(user: Vacance): Promise<Vacance> {
    const res = await this.vacanceModel.create(user)
    return res
  }

  async findAllVacances(): Promise<Vacance[]> {
    const vacances = await this.vacanceModel.find();
    return vacances;
  }

  async removeVacance(id: string) {
    const vacance = await this.vacanceModel.findByIdAndDelete(id)
    return vacance;
  }
}
