import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent {
  @Input() path!: string;
  @Output() photo = new EventEmitter<File>();
  photoFile!: File;

  sendPhoto() {
    this.photo.emit(this.photoFile);
  }

  catchPhoto(event: any) {
    this.photoFile = event.target.files[0];
    console.log(this.photoFile);
    this.photo.emit(this.photoFile);

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      this.path = e.target?.result;
    };
  }

  upload() {
    document.getElementById("input-file")!.click();
  }
}
