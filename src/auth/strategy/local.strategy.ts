import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local'
import { Injectable } from "@nestjs/common";
import { AuthService } from "../auth.service";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy){
    
    constructor(public authService : AuthService){
        super()
    }


    async validate(username:string,password:string){
        let user=await this.authService.validate(username,password)
        return user
    }

}