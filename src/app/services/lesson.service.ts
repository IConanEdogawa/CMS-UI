import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private readonly http: HttpClient) { }

  baseUrl: string = environment.baseUrl


  GettAllLessons(): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + `/Lesson/GetAllLessons`)
  }

  GetByIdLesson(id: number): Observable<any> {
    return this.http
      .get<any>(this.baseUrl + `/Lesson/GetAllLessonsByClassId?Id=${id}`)
  }

  PostAttendance(data: any): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + `/Attendance/CreateAttendace`, data)
  }
}
