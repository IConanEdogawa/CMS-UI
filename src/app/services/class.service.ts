import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private readonly http: HttpClient) { }

  baseUrl: string = environment.baseUrl
  

  GetAllClasses(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + `Class/GetAllClasses`)
  } 

  create(body:any):Observable<any>{
    return this.http.post<any>(environment.baseUrl+"/Class/CreateClass",body)
  }
}
