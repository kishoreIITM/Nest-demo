import { Injectable } from '@nestjs/common';
import { Student} from './student.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class StudentService {
    
    constructor(@InjectRepository(Student) public studentRepository :Repository<Student>){}

    async findAll(){
        let data=await this.studentRepository.find()
        return data
    }

    findOne(){
        return this.studentRepository
    }

    async write(newStudent:any){
        let data = this.studentRepository.create(newStudent)
        this.studentRepository.insert(data)
    }

    update(){
        return this.studentRepository
    }

    delete(){
        return this.studentRepository
    }
}

