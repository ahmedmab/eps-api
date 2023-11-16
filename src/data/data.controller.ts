import { Controller, Get, Query } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService) { }

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
}
