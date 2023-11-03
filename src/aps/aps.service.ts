import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-ap.dto';
import { UpdateApDto } from './dto/update-ap.dto';

@Injectable()
export class ApsService {
  create(createApDto: CreateQuizDto) {
    return 'This action adds a new ap';
  }

  findAll() {
    return `This action returns all aps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ap`;
  }

  update(id: number, updateApDto: UpdateApDto) {
    return `This action updates a #${id} ap`;
  }

  remove(id: number) {
    return `This action removes a #${id} ap`;
  }
}
