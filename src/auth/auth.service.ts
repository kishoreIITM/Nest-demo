import { Injectable ,forwardRef, Inject} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(()=>UsersService)) public userService : UsersService, public jwtService:JwtService){}

    jwt(data:any){
        let payload = {email:data.email,sub:data.uuid}
        let acces_token = this.jwtService.sign(payload)
        return acces_token
    }

    async validate(email:string,password:string){
        let user = await this.userService.findOne(email)
        if(user.password==password){
                return user
            }
        else{
                return null
            }        
    }
}
