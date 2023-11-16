import { Injectable } from '@nestjs/common';
import { Academie } from './schemas/academie.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Direction } from './schemas/direction.schema';

@Injectable()
export class DataService {
    constructor(
        @InjectModel(Academie.name) private academieModel: mongoose.Model<Academie>,
        @InjectModel(Direction.name) private directionModel: mongoose.Model<Direction>) {
    }

    async findAllAcademie(): Promise<Academie[]> {
        const academies = await this.academieModel.find()
        return academies
    }

    async findAllDirection(): Promise<Direction[]> {
        const directions = await this.directionModel.find()
        return directions
    }

    async findDirectionsByAcademie(query: any): Promise<any> {
        const directions = await this.directionModel.find(query).exec();
        return directions
    }
}
