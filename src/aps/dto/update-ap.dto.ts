import { PartialType } from '@nestjs/mapped-types';
import { CreateQuizDto } from './create-ap.dto';

export class UpdateApDto extends PartialType(CreateQuizDto) {}
