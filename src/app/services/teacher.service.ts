import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(public http:HttpClient) { }

  baseUrl=environment.baseUrl

  getAll():Observable<any>{
    return this.http.get<any>(this.baseUrl+"/Teacher/GetAllTeachers")
  }
}
