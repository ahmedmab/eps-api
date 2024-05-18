import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { AcademieSchema } from './schemas/academie.schema';
import { DirectionSchema } from './schemas/direction.schema';
import { VacanceSchema } from './schemas/vacance.schema';
import { schoolYearSchema } from './schemas/schoolYear.schema';

@Module({
  imports: [
  MongooseModule.forFeature([{ name: 'Academie', schema: AcademieSchema }], 'data'),
  MongooseModule.forFeature([{ name: 'Direction', schema: DirectionSchema }], 'data'),
  MongooseModule.forFeature([{ name: 'Vacance', schema: VacanceSchema }], 'data'),
  MongooseModule.forFeature([{ name: 'SchoolYear', schema: schoolYearSchema }], 'data'),
],
  controllers: [DataController],
  providers: [DataService]
})
export class DataModule { }
