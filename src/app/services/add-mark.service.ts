import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AddMark } from '../models/addmark';


@Injectable({
  providedIn: 'root'
})
export class AddMarkService {
  constructor(private http:HttpClient) { }
  baseURL=environment.baseUrl


  getAllAddMark():Observable<AddMark>{
    return this.http.get<AddMark>(this.baseURL+"/Student/GetAllSudents")
  }

  getAddMarkById(id:number):Observable<any>{
    return this.http.get<any>(this.baseURL+"/Attendance/GetAllAttendance?id="+id)
  }
}