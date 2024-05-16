import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { EventCreate } from '../models/event-create';
import { ResponceModel } from '../models/responce-model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  baseURL = environment.baseUrl

 eventCreate(data:EventCreate): Observable<ResponceModel>{
  return this.http.post<ResponceModel>(this.baseURL + "/Event/CreateEvent", data)
 }

}