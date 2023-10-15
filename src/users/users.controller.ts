import { Controller, Get, Post, Body, Patch, Param, Delete, Request, ConflictException, Logger, Query, HttpCode, Header } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  logger: Logger;
  constructor(private readonly usersService: UsersService) {
    this.logger = new Logger(UsersController.name);
  }

  @Post('create')
  @Header('Cache-Control', 'none')
  async create(@Body() user: CreateUserDto): Promise<any> {
    const newUser = user;
    try {
      const query = { phone: newUser.phone };
      const isUser = await this.usersService.findOne(query);
      if (isUser) throw new ConflictException('User Already Exist');
      const user = await this.usersService.create(newUser);
      return user;
    } catch (err) {
      this.logger.error('Something went wrong in signup:', err);
      throw err;
    }
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<any> {
    return this.usersService.findById(id);
  }

  @Get()
  async findUser(@Query() query): Promise<any> {
    return this.usersService.findOne(query);
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
