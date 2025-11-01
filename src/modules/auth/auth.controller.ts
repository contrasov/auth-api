import { Controller, Get, Post, Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/auth.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiBody({type: RegisterDto})
  create(@Body() authDto: RegisterDto) {
    return this.authService.create(authDto);
  }
}