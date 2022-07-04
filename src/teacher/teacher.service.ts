import { Injectable ,BadRequestException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { teacher } from './teacher.entity';


@Injectable()
export class TeacherService {
    constructor(@InjectRepository(teacher) public teacherRepo:Repository<teacher>){}
    async findAll(){
        let data=await this.teacherRepo.find()
        return data
    }

    findOne(){
        return this.teacherRepo
    }

    async write(newTeacher:any){
        let data = this.teacherRepo.create(newTeacher)
        await this.teacherRepo.insert(data)
        .then(()=>{
            console.log("User added to teacher")
        })
        .catch(()=>{
            throw new BadRequestException("Error in Adding to teacehr")
        })
    }
    

    update(){
        return this.teacherRepo
    }

    delete(){
        return this.teacherRepo
    }
}
