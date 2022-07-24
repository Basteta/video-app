import {IUser} from "./user";

export interface IVideo {
    id: number;
    imageUrl: string;
    url: string;
    author: IUser;
}