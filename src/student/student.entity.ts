import { Entity ,PrimaryColumn,Column} from "typeorm";

@Entity()
export class Student{

    @PrimaryColumn()
    id:String

    @Column()
    name:string

    @Column()
    rollno:string

}