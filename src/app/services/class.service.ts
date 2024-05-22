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
  
  GettAllLessons(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + `Lesson/GetAllLessons`)
  }

  GetAllClasses(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + `Class/GetAllClasses`)
  } 
}
