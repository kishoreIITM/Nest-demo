import { Controller , Get,Post, Body} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(public usersService:UsersService){

    }


    @Get()
    getAll(){    
        return this.usersService.get()
    }

    @Post('/signup')
    signup(@Body() body:{}){
        return  this.usersService.signup(body)
    }
}
