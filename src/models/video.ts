import {IVideo} from "../interfaces/video";
import {User} from "./user";

export class Video implements IVideo {
    constructor (
        public id: number,
        public imageUrl: string,
        public url: string,
        public author: User
    ) {}
}