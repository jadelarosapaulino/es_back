import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor() {}

    // @HttpCode(HttpStatus.OK)
    // @Post('login')
    // signId(@Body() signInDto: Record<string, any>) {
    //     return this.authSevice.signIn(signInDto.username, signInDto.password);
    // }
}
