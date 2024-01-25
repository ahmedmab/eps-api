import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from './schemas/quiz.schema';
import { QuizController } from './controllers/quiz/quiz.controller';
import { CyclesSchema } from './schemas/cycles.schema';
import { CyclesController } from './controllers/quiz/cycles.controller';
import { CyclesService } from './services/cycles.service';

@Module({
  imports:
    [MongooseModule.forFeature([{ name: 'Quiz', schema: QuizSchema }], 'aps'),
    MongooseModule.forFeature([{ name: 'Cycle', schema: CyclesSchema }], 'aps')],
  controllers: [QuizController, CyclesController],
  providers: [QuizService, CyclesService],
})
export class ApsModule { }
