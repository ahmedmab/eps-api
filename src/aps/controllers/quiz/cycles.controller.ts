import { Controller, Get, Post, Body, Param, Delete, Logger, Query, Put } from '@nestjs/common';
import { CreateCyclesDto } from 'src/aps/dto/create-cycles.dto';
import { UpdateCyclesDto } from 'src/aps/dto/update-cycles.dto';
import { CyclesService } from 'src/aps/services/cycles.service';


@Controller('aps/cycles')
export class CyclesController {
  logger: Logger;
  constructor(private readonly cyclesService: CyclesService) {
    this.logger = new Logger(CyclesController.name);
  }

  @Post()
  create(@Body() createCyclesDto: CreateCyclesDto) {
    return this.cyclesService.create(createCyclesDto);
  }

  @Get()
  async findByAps(@Query('apsId') apsId: number): Promise<any> {
    return this.cyclesService.findByAps(apsId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cyclesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCyclesDto: UpdateCyclesDto): Promise<any> {
    return this.cyclesService.update(id, updateCyclesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cyclesService.remove(id);
  }
}
