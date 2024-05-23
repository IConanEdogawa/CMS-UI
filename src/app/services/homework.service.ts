import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  constructor(private readonly http: HttpClient) { }

  baseUrl: string = environment.baseUrl

  CreateHomework(data: any): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + `Homework/CreateHomework`, data)
  }
}
