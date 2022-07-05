import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt,Strategy} from 'passport-jwt'
import { Injectable } from "@nestjs/common";
import { AuthService } from "../auth.service";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    
    constructor(){
        console.log("constructor called")
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:"Key"
        })
        console.log(this)
    }


    async validate(payload:any){
        console.log("hie")
        return payload
    }

}