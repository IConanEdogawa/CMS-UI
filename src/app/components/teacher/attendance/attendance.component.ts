import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../services/class.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit {
  classList: any;
  lessonList: any;
  constructor(private classService:ClassService) {
    this.classService
      .GetAllClasses().subscribe((res) => {
        console.log(res);
        this.classList = res
      });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  onFileSelected(event: any) {}

  onChangeClass(event: any) {
    console.log(event.target.value);
    this.classService
      .GettAllLessons().subscribe((res) => {
        this.lessonList = res
        console.log(this.lessonList);
      });
  }

  onChangeLesson(event: any) {
    console.log(event.target.value);
  }
}
