import { Controller, Get, Post, Body, Param, Delete, Logger, Query, Header, Put, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateRoleUserDto, UpdateStatusUserDto } from './dto/create-user.dto';

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
      // const query = { phone: newUser.phone };
      // const isUser = await this.usersService.findOne(query);
      // if (isUser) {
      //   return this.usersService.update(isUser._id, newUser)
      //   throw new ConflictException('User Already Exist'); 
      // }
      const user = await this.usersService.create(newUser);
      return user;
    } catch (err) {
      this.logger.error('Something went wrong in Profil creation:', err);
      throw err;
    }
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.usersService.findAll();
  }

  @Get('find')
  // async findUser(@Query('phone') query: any): Promise<any> {
  //   return this.usersService.findOne({ phone: (`+${query}`).replace(/\s/g, '') });
  // }
  async findUser(@Query('email') query: any): Promise<any> {
    return this.usersService.findOne({ email: query });
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<any> {
    return this.usersService.findById(id);
  }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updateUserDto): Promise<any> {
  //   return this.usersService.update(id,);
  // }
  @Put(':id')
  async update(@Param('id') id: string, @Body() user: CreateUserDto): Promise<any> {
    return this.usersService.update(id, user);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() user: CreateUserDto): Promise<any> {
    return this.usersService.update(id, user);
  }

  @Patch(':id/classe')
  async updateUserClasse(@Param('id') id: string, @Body() body: any): Promise<any> {
    return this.usersService.updateClasse(id, body);
  }

  @Patch(':id/role')
  async updateRole(@Param('id') id: string, @Body() newRole: UpdateRoleUserDto): Promise<any> {
    return this.usersService.updateRole(id, newRole);
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body() status: UpdateStatusUserDto): Promise<any> {
    return this.usersService.updateStatus(id, status);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.usersService.remove(id);
  }
}
