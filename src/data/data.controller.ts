import { Body, Controller, Delete, Get, Header, Param, Post, Put, Query } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateVacanceDto } from './dto/create-vacance.dto';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) { }

  //etablissement data
  @Get('academies')
  async findAllAcademie(): Promise<any[]> {
    return this.dataService.findAllAcademie();
  }

  @Get('directions/find')
  async findUser(@Query('academieId') query: number): Promise<any> {
    return this.dataService.findDirectionsByAcademie({ academieId: +query });
  }

  @Get('directions')
  async findAllDirection(): Promise<any[]> {
    return this.dataService.findAllDirection();
  }
  //vacances data
  @Post('vacances')
  @Header('Cache-Control', 'none')
  async create(@Body() vacance: CreateVacanceDto): Promise<any> {
    const newVacance = vacance;
    try {
      const vacance = await this.dataService.create(newVacance);
      return vacance;
    } catch (err) {
      throw err;
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() vacance: CreateVacanceDto): Promise<any> {
    return this.dataService.update(id, vacance);
  }

  @Get('vacances')
  async findAllVacances(): Promise<any[]> {
    return this.dataService.findAllVacances();
  }

  @Delete('vacances/:id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.dataService.removeVacance(id);
  }
}
