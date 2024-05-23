import { Component } from '@angular/core';
import { ClassService } from '../../../services/class.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  constructor(private classService:ClassService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  onFileSelected(event: any) {}

  onChangeClass(event: any) {
    console.log(event.target.value);

    // this.classService
    //   .GetAllClasses().subscribe((res) => {
    //     console.log(res);
    //   });
    
  }

  onChangeLesson(event: any) {
    console.log(event.target.value);
  }
}
