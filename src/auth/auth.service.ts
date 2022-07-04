import { Injectable , UnauthorizedException} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(public userService : UsersService){}

    async validate(email:string,password:string){
        let user = await this.userService.findOne(email)
        if(user.password==password){
                return user
            }
        else{
                return new UnauthorizedException()
            }        
    }
}
