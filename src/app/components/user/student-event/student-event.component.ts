import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { GetAllEvents } from '../../../models/get-all-events';

@Component({
  selector: 'app-student-event',
  templateUrl: './student-event.component.html',
  styleUrl: './student-event.component.scss',
})
export class StudentEventComponent {
  events!: GetAllEvents;

  constructor(private readonly studentEvent: EventService) {
    // this.studentEvent.getAllEvents().subscribe({
    //   next: (res) => {
    //     this.events = res;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  ngOnInit(): void {
    this.studentEvent.getAllEvents().subscribe(
      (data: GetAllEvents) => {
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events', error);
      }
    );
  }
}
