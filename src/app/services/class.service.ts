import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }

  create(body:any):Observable<any>{
    return this.http.post<any>(environment.baseUrl+"/Class/CreateClass",body)
  }
}
