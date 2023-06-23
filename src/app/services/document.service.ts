import{HttpClient} from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class DocumentService
{
    private BASE_URL ="http://localhost:8080/documents";

    constructor(private httpClient:HttpClient) {}

  public findAll() : Observable<any>{
    return this.httpClient.get(this.BASE_URL);
  }
  
  public save(documentObject:any) : Observable<any>{
    return this.httpClient.post(this.BASE_URL,documentObject);
  }
  
  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id); 
  }

  public findOne(id:number) : Observable<any>{
    return this.httpClient.get(this.BASE_URL+"/"+id);
  } 

  public update(documentObject:any) : Observable<any>{
    var documentJSON = JSON.parse(documentObject);
    return this.httpClient.put(this.BASE_URL+'/'+documentJSON.idDocument, documentJSON);
  }
}
