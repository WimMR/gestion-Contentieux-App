import { Priorite } from "../enums/priorite.enum";
import { User } from "./user";

export class Tache{
    id!:number;
    title!:string;
    description!:string;
    dateLimite!:Date;
    owner!:User;
    collaborators!:User[];
    priorite!:Priorite;
    isShared!:boolean;
    isFinished!:boolean;
}