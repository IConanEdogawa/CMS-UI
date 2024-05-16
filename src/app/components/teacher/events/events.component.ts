import { Component } from '@angular/core';
import { EventCreate } from '../../../models/event-create';
import { EventService } from '../../../services/event.service';
import { ResponceModel } from '../../../models/responce-model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  upload(){
    document.getElementById("real-input")?.click()
  }
 
  constructor( private eventService:EventService) {
    
    this.eventCreated()
    
  }
  
  responceModde!:ResponceModel

  selectedFile: File | null = null
  
  data = {
    title: "",
    description: "",
    photo: this.selectedFile,
    date: {
      day: 0,
      month: 0,
      year: 0
    }
  } 
  datas = {}

  onFileSelected(event: any) {
    this.data.photo = event.target.files[0] as File;
  }
  
  eventCreated(){
    const titleElement = document.getElementById("Title") as HTMLInputElement;
    if (titleElement) {
      console.log(this.datas)
      console.log(titleElement.value)

      this.data.title = titleElement.value;
    }

    const description = document.getElementById("description") as HTMLInputElement;
    if (description) {
      this.data.description = description.value;
    } 

    const date = document.getElementById("date") as HTMLInputElement
    if(date){
      const realDate = new Date(date.value)

      this.data.date.day=realDate.getDay()
      this.data.date.month=realDate.getMonth()
      this.data.date.year=realDate.getFullYear()

    }

    console.log(this.data);
    this.eventService.eventCreate(this.data).subscribe({
      next:(data)=>{
        console.log(data);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }



}
