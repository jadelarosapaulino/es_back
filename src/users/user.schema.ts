import { EntitySchema } from "typeorm";
import { User } from "./user.entity";

export const UserSchema = new EntitySchema<User> ({
    name: 'User',
    target: User,
    columns: {
        userId: {
            type: Number,
            primary: true,
            generated: true
        },
        fName: {
            type: String,
        },
        lName: {
            type: String,
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    relations: {
        photo: {
            type: 'one-to-many',
            target: 'Photo'
        }
    }
})