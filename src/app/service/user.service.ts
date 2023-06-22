import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { }


  public findAll(): Observable<any> {
    return this.httpClient.get(this.BASE_URL);
  }

  public save(user: User): Observable<any> {
    return this.httpClient.post(this.BASE_URL, user);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.BASE_URL + "/" + id);
  }

  public findOne(id: number): Observable<any> {
    return this.httpClient.get(this.BASE_URL + '/' + id);
  }
  public update(user: any): Observable<any> {
    var userJSON = JSON.parse(user);
    return this.httpClient.put(this.BASE_URL + '/' + userJSON.idUtilisateur, userJSON);
  }

}
