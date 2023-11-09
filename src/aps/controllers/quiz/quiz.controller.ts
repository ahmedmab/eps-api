import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { CreateQuizDto } from 'src/aps/dto/create-quiz.dto';
import { UpdateQuizDto } from 'src/aps/dto/update-quiz.dto';
import { QuizService } from 'src/aps/services/quiz.service';


@Controller('aps/quiz')
export class QuizController {
  logger: Logger;
  constructor(private readonly quizService: QuizService) {
    this.logger = new Logger(QuizController.name);
   }

  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.update(id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizService.remove(id);
  }
}
