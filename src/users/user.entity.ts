import { Entity,PrimaryColumn,PrimaryGeneratedColumn,Column ,Generated} from "typeorm";

@Entity()
export class Users{
    @PrimaryColumn()
    email : string

    @Column()
    password: string

    @Column()
    role: string

    @Column()
    @Generated('uuid')
    uuid:string

}