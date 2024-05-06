import { Injectable } from '@nestjs/common';
import { Academie } from './schemas/academie.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Direction } from './schemas/direction.schema';
import { Vacance } from './schemas/vacance.schema';
import { SchoolYear } from './schemas/schoolYear.schema';
import * as moment from "moment";

@Injectable()
export class DataService {
  constructor(
    @InjectModel(Academie.name) private academieModel: mongoose.Model<Academie>,
    @InjectModel(Direction.name)
    private directionModel: mongoose.Model<Direction>,
    @InjectModel(Vacance.name) private vacanceModel: mongoose.Model<Vacance>,
    @InjectModel(SchoolYear.name) private schoolYearModel: mongoose.Model<SchoolYear>,

  ) { }

  // Academie et Direction
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
  async create(vacance: Vacance): Promise<Vacance> {
    const starDate = moment(vacance.startDate).add(1, 'minute');
    const endDate = moment(vacance.endDate).add(1, 'minute');
    vacance.startDate = starDate.format('DD/MM/YYYY')
    vacance.endDate = endDate.format('DD/MM/YYYY')
    vacance.daysNumber = endDate.diff(starDate, 'days') + 1
    const res = await this.vacanceModel.create(vacance)
    return res
  }

  async update(id: string, vacance: Vacance) {
    const starDate = moment(vacance.startDate).add(1, 'minute');
    const endDate = moment(vacance.endDate).add(1, 'minute');
    vacance.startDate = starDate.format('DD/MM/YYYY')
    vacance.endDate = endDate.format('DD/MM/YYYY')
    vacance.daysNumber = endDate.diff(starDate, 'days') + 1
    const res = await this.vacanceModel.findByIdAndUpdate(id, vacance)
    return res;
  }

  async findAllVacances(): Promise<Vacance[]> {
    const vacances = await this.vacanceModel.find();
    return vacances;
  }

  async removeVacance(id: string) {
    const vacance = await this.vacanceModel.findByIdAndDelete(id)
    return vacance;
  }

  // Année Scolaire
  async findSchoolYear(): Promise<SchoolYear[]> {
    const schoolYear = await this.schoolYearModel.find();
    return schoolYear;
  }

  async findSchoolYearById(id: string): Promise<SchoolYear> {    
    const schoolYear = await this.schoolYearModel.findById(id);    
    return schoolYear;
  }

  async updateSchoolYear(id: string, schoolYear: SchoolYear) {
    const res = await this.schoolYearModel.findByIdAndUpdate(id, schoolYear)
    return res;
  }
}
