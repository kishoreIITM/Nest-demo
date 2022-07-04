import { Controller,UseGuards , Get,Post, Body,Request} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(public usersService:UsersService){

    }


    @Get()
    getAll(){    
        return this.usersService.getall()
    }

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    login(@Request() req){
        return req.user
    }


    @Post('/signup')
    signup(@Body() body:{}){
        return  this.usersService.create(body)
    }
}
