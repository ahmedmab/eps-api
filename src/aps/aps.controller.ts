import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApsService } from './aps.service';
import { CreateQuizDto } from './dto/create-ap.dto';
import { UpdateApDto } from './dto/update-ap.dto';

@Controller('aps')
export class ApsController {
  constructor(private readonly apsService: ApsService) {}

  @Post()
  create(@Body() createApDto: CreateQuizDto) {
    return this.apsService.create(createApDto);
  }

  @Get()
  findAll() {
    return this.apsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApDto: UpdateApDto) {
    return this.apsService.update(+id, updateApDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apsService.remove(+id);
  }
}
