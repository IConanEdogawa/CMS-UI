import { Component } from '@angular/core';
import { EventCreate } from '../../../models/event-create';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  upload(){
    document.getElementById("real-input")?.click()
  }
 
  constructor(private eventService:EventService) {
    this.eventCreated()
  }
  
  res

  eventCreated(){
    this.eventService.eventCreate().subscribe({
      next:(data)=>{
        this.
      }
    })
  }



}
