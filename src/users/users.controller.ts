import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() user: CreateUserDto): Promise<any> {            
    return this.usersService.create(user);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.usersService.findAll(); 
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.usersService.findOne(id);
  }

  @Get(':id/docs')
  async findUserDocs(@Param('id') id: string): Promise<any> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto): Promise<any> {
    return this.usersService.update(id,);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.usersService.remove(id);
  }
}
