import { Photo } from "src/photos/photo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    fName: string;

    @Column()
    lName: string;

    @Column({default: true})
    isActive: boolean;    

    @OneToMany( type => Photo, photo => photo.photoId )
    photo: Photo
}