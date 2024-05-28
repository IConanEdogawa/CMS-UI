import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AddMark } from '../models/addmark';

@Injectable({
  providedIn: 'root',
})
export class AddMarkService {
  constructor(private http: HttpClient) {}
  baseURL = environment.baseUrl;

  addMark(data: any): Observable<any> {
    return this.http.post<any>(
      this.baseURL + '/AppraciateStudent/AppraciateStudent',
      data
    );
  }
}
