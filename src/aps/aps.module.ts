import { Module } from '@nestjs/common';
import { ApsService } from './aps.service';
import { ApsController } from './aps.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from './schemas/quiz.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Quiz', schema: QuizSchema }]), MongooseModule.forRoot(process.env.DB_APS_URL, { connectionName: 'aps' })],
  controllers: [ApsController],
  providers: [ApsService],
})
export class ApsModule { }
