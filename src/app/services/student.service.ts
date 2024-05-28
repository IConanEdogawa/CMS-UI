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
    return this.http.get<any>(`${this.baseUrl}/Class/GetClassById?id=${classId}`)
  }

  studentGetById(id:string):Observable<any>{
    return this.http.get(this.baseUrl+`/Student/GetStundetById?Id=${id}`)
  }

  studentUpdate(data:any):Observable<any>{
    return this.http.put<any>(this.baseUrl+`/Student/UpdateStudent?Id=${data.id}&FirsName=${data.firstName}&LastName=${data.lastName}&Gender=1&DateOfBirth.Day=${data.dateOfBirth.day}&DateOfBirth.Month=${data.dateOfBirth.month}&DateOfBirth.Year=${data.dateOfBirth.year}&Location.Country=${data.location.country}&Location.Region=${data.location.region}&Location.District=${data.location.district}&Location.HomeNumber=${data.location.homeNumber}&ParentsPhoneNumber=${data.parentsPhoneNumber}&ClassId=${data.class.id}`,{})
  }

}
