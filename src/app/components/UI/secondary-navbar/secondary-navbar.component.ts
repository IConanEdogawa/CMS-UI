import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrl: './secondary-navbar.component.scss'
})
export class SecondaryNavbarComponent {
  @Input() path!:string
  @Output() photo=new EventEmitter<File>();
  photoFile!:File

  sendPhoto(){
    this.photo.emit(this.photoFile)
  }

  catchPhoto(photo:any|File){
    this.photoFile=photo
  }

  upload(){
    document.getElementById("input-file")!.click()
  }
}
