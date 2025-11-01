import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/auth.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }

    create(authDto: RegisterDto) {
        const result = this.userService.updateOrCreate(authDto.username, authDto);
        return result;
      }
}