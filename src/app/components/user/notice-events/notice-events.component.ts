import { Component } from '@angular/core';

@Component({
  selector: 'app-notice-events',
  templateUrl: './notice-events.component.html',
  styleUrl: './notice-events.component.scss'
})
export class NoticeEventsComponent {
  upload(){
    document.getElementById("real-input")?.click()
  }
}
