import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from '../models/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private BASE_URL = "http://localhost:8080/taches";

  constructor(private httpClient:HttpClient) { }

  public findAll():Observable<Tache[]>{
    return this.httpClient.get<Tache[]>(this.BASE_URL);
  }

  public save(tache: Tache):Observable<Tache>{
    return this.httpClient.post<Tache>(this.BASE_URL, tache)
  }

  public delete(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.BASE_URL}/${id}`);
  }

  public findOne(id: number): Observable<Tache>{
    return this.httpClient.get<Tache>(`${this.BASE_URL}/${id}`);
  }
}
