import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class teacher{
    @PrimaryColumn()
    id:string

    @Column()
    name: string

    @Column()
    phone: number

}