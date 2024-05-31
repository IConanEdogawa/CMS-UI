import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  studentUpdate(student: any): Observable<any> {
    const url = `${this.baseUrl}/Student/UpdateStudent`;
    const params = {
      Id: student.id,
      FirstName: student.firstName,
      LastName: student.lastName,
      Gender: student.gender,
      PhotoPath: student.photoPath,
      Location: student.location,
      ParentsPhoneNumber: student.parentsPhoneNumber,
      Class: {
        Grade: student.class.grade,
        Name: student.class.name
      }
    };
    
    return this.http.put<any>(url, params, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
