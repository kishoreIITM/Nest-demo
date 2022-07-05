import { Controller,UseGuards,Inject , Get,Post, Body,Request, forwardRef} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {

    constructor( public usersService:UsersService, @Inject(forwardRef(()=>AuthService)) public authService:AuthService){

    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAll(){    
        return this.usersService.getall()
    }

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    login(@Request() req){
        return this.authService.jwt(req.user) 
    }


    @Post('/signup')
    signup(@Body() body:{}){
        return  this.usersService.create(body)
    }
}
