import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "books"})
export class Books extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;
    @Column() title: string;
    @Column() author: string;
};



