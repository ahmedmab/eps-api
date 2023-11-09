import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from './schemas/quiz.schema';
import { QuizController } from './controllers/quiz/quiz.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Quiz', schema: QuizSchema }], 'aps')],
  controllers: [QuizController],
  providers: [QuizService],
})
export class ApsModule { }
