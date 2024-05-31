import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { EventCreate } from '../models/event-create';
import { ResponceModel } from '../models/responce-model';
import { GetAllEvents } from '../models/get-all-events';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}
  baseURL = environment.baseUrl;

  eventCreate(data: any): Observable<any> {
    console.log(data);
    const formData = new FormData();
    console.log(data.photo);
    formData.append('image', data.photo);
    if (data !== undefined) {
      return this.http.post<any>(
        this.baseURL +
          `/Event/CreateEvent?Title=${data.title}&Date.Day=${data.date.day}&Date.Month=${data.date.month}&Date.Year=${data.date.year}&Description=${data.description}`,
        formData
      );
      // `/Event/CreateEvent?Title=${data.title}&Date.Day=${data.date.day}&Date.Month=${data.date.month}&Date.Year=${data.date.year}&Description=${data.description}`, data)
    } else {
      return this.http.post<any>(this.baseURL + `/Event/CreateEvent`, data);
    }
  }

  getAllEvents(): Observable<GetAllEvents> {
    return this.http.get<GetAllEvents>(`${this.baseURL}/Event/GetAllEvents`);
  }
}
