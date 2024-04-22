import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from './schemas/quiz.schema';
import { QuizController } from './controllers/quiz/quiz.controller';
import { CyclesSchema } from './schemas/cycles.schema';
import { CyclesController } from './controllers/quiz/cycles.controller';
import { CyclesService } from './services/cycles.service';
import { ObservableSchema } from './schemas/observable.schema';
import { ObservableController } from './controllers/quiz/observable.controller';
import { ObservableService } from './services/observable.service';

@Module({
  imports:
    [MongooseModule.forFeature([{ name: 'Quiz', schema: QuizSchema }], 'aps'),
    MongooseModule.forFeature([{ name: 'Observable', schema: ObservableSchema }], 'aps'),
    MongooseModule.forFeature([{ name: 'Cycle', schema: CyclesSchema }], 'aps')],
  controllers: [QuizController, CyclesController, ObservableController],
  providers: [QuizService, CyclesService, ObservableService],
})
export class ApsModule { }
