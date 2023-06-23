import { Document } from "./document";

export class Case{
    idCase!:number;
    referenceCase!:string;
    titleCase!:string;
    descriptionCase!:string;
    status!:number;
    documents!:Document[];

}