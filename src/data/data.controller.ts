import { Body, Controller, Delete, Get, Header, Param, Post, Put, Query } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateVacanceDto } from './dto/create-vacance.dto';
import { CreateSchoolYearDto } from './dto/school-year.dto';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) { }

  // Année Scolaire
  @Get('school-year/:id')
  async findSchoolYearById(@Param('id') id: string): Promise<any> {
    return this.dataService.findSchoolYearById(id);
  }

  @Get('school-year')
  async findSchoolYear(): Promise<any> {
    return this.dataService.findSchoolYear();
  }

  @Put('school-year/:id')
  async updateSchoolYear(@Param('id') id: string, @Body() schoolYear: CreateSchoolYearDto): Promise<any> {
    return this.dataService.updateSchoolYear(id, schoolYear);
  }

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

  @Put('vacances/:id')
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
