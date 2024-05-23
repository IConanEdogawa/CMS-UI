import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private readonly http: HttpClient) { }

  baseUrl: string = environment.baseUrl

  StudentGetById(classId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}Student/GetStudentsByClassId?id=${classId}`)
  }
}
