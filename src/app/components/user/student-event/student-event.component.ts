import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { environment } from '../../../../environments/environment';
import { GetAllEvents } from '../../../models/get-all-events';

@Component({
  selector: 'app-student-event',
  templateUrl: './student-event.component.html',
  styleUrls: ['./student-event.component.scss'],
})
export class StudentEventComponent implements OnInit {
  events!: GetAllEvents;
  defaultPhoto: string = 'assets/images/default-event.png'; // путь к фото по умолчанию

  constructor(private readonly eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      (data: GetAllEvents) => {
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events', error);
      }
    );
  }

  getEventPhoto(photoPath: string): string {
    if (photoPath) {
      return `${environment.mainPath}${photoPath}`;
    } else {
      return this.defaultPhoto;
    }
  }
}
