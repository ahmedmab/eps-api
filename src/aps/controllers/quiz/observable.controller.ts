import { Controller, Get, Post, Body, Param, Delete, Logger, Query, Put } from '@nestjs/common';
import { CreateObservableDto } from 'src/aps/dto/create-observable.dto';
import { UpdateObservableDto } from 'src/aps/dto/update-observable.dto';
import { ObservableService } from 'src/aps/services/observable.service';


@Controller('aps/observable')
export class ObservableController {
  logger: Logger;
  constructor(private readonly observableService: ObservableService) {
    this.logger = new Logger(ObservableController.name);
  }

  @Post()
  create(@Body() createObservableDto: CreateObservableDto) {
    return this.observableService.create(createObservableDto); 
  }

  @Get()
  async findByCriteria(@Query('apsId') apsId: number, @Query('nvId') nvId: number): Promise<any> {
    return this.observableService.findByCriteria(apsId, nvId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.observableService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateObservableDto: UpdateObservableDto): Promise<any> {
    return this.observableService.update(id, updateObservableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.observableService.remove(id);
  }
}
