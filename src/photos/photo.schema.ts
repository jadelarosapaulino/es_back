import { EntitySchema } from "typeorm";
import { Photo } from "./photo.entity";

export const PhotoSchema = new EntitySchema<Photo> ({
    name: 'Photo',
    target: Photo,
    columns: {
        photoId: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        size: {
            type: Number,
        },
        isActive: {
            type: Boolean,
            default: true
        }
    }
})