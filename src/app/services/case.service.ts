import{HttpClient} from '@angular/common/http';
import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class CaseService
{
    private BASE_URL ="http://localhost:8080/cases";

    constructor(private httpClient:HttpClient) {}

  public findAll() : Observable<any>{
    return this.httpClient.get(this.BASE_URL);
  }
  
  public save(caseObject:any) : Observable<any>{
    return this.httpClient.post(this.BASE_URL,caseObject);
  }
  
  public delete(id:number) : Observable<any>{
    return this.httpClient.delete(this.BASE_URL+"/"+id); 
  }

  public findOne(id:number) : Observable<any>{
    return this.httpClient.get(this.BASE_URL+"/"+id);
  } 

  public update(caseObject:any) : Observable<any>{
    var caseJSON = JSON.parse(caseObject);
    return this.httpClient.put(this.BASE_URL+'/'+caseJSON.idCase, caseJSON);
  }
}

