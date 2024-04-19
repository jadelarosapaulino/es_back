import { User } from "src/users/user.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    photoId: number;

    @Column()
    name: string;

    @Column({default: ''})
    description: string;

    @Column()
    size: number;

    @Column({default: true})
    isActive: boolean;    
}