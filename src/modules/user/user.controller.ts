import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Injectable } from '@nestjs/common';
import { RegisterDto } from '../auth/dto/auth.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly authService: UserService) {}

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.authService.findOne(username);
  }

  @Put(':username')
  updateOrCreate(@Param('username') @Body() authDto: RegisterDto) {
    return this.authService.createUser(authDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}