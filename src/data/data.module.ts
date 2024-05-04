import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AcademieSchema } from './schemas/academie.schema';
import { DirectionSchema } from './schemas/direction.schema';
import { VacanceSchema } from './schemas/vacance.schema';
import { schoolYearSchema } from './schemas/schoolYear.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Academie', schema: AcademieSchema },
    { name: 'Direction', schema: DirectionSchema },
    { name: 'Vacance', schema: VacanceSchema },
    { name: 'SchoolYear', schema: schoolYearSchema },

  ])],
  controllers: [DataController],
  providers: [DataService]
})
export class DataModule { }
