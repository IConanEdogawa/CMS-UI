import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl


  createStudent(firstName: string, lastName: string, email: string, day: number, month: number, year: number, country: string, region: string, district: string, homeNumber: string, phoneNumber: string, parentsPhoneNumber: string, photo: File, pdf: File, classId: string): Observable<any> {
    let form=new FormData()
    form.append("photo",photo)
    form.append("pdf",pdf)
    return this.http.post<any>(this.baseUrl + `/Auth/StudentRegister?FirstName=${firstName}&LastName=${lastName}&Email=${email}&DateOfBirth.Day=${day}&DateOfBirth.Month=${month}&DateOfBirth.Year=${year}&Location.Country=${country}&Location.Region=${region}&Location.District=${district}&Location.HomeNumber=${homeNumber}&ClassId=${classId}&PhoneNumber=${phoneNumber}&ParentsPhoneNumber=${parentsPhoneNumber}`,form)
  }
  
  createTeacher(firstName: string, lastName: string, email: string, gender:number, day: number, month: number, year: number, country: string, region: string, district: string, homeNumber: string, phoneNumber: string, parentsPhoneNumber: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + `/Auth/TeacherRegister?FirstName=${firstName}&LastName=${lastName}&Email=${email}&Gender=${gender}&BirthDate.Day=${day}&BirthDate.Month=${month}&BirthDate.Year=${year}&PhoneNumber=${phoneNumber}&Location.Country=${country}&Location.Region=${region}&Location.District=${district}&Location.HomeNumber=${homeNumber}`,{})
  }

  SendEmail(email: string): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + `/Auth/ForgotPassword?email=${email}`, {
        email: 'test@gmail.com',
      })
      .pipe(map((data) => {
        console.log(data)
        return data
      }))
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(this.baseUrl + `/Auth/Login`, {
        email: email,
        password: password
      })
      .pipe(map((data) => {
        console.log(data)
        return data
      }))
  }
}
