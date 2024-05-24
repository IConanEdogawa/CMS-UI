import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../services/class.service';
import { LessonService } from '../../../services/lesson.service';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss',
})
export class AttendanceComponent implements OnInit {
  classList: any;
  lessonList: any;
  classId!: number;
  studentList!: any;
  constructor(
    private readonly classService: ClassService,
    private readonly lessonService: LessonService,
    private readonly studentService: StudentService
  ) {
    this.classService.GetAllClasses().subscribe
    ((res) => {
      console.log(res);
      this.classList = res;
    });
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  onFileSelected(event: any) {}

  onChangeClass(event: any) {
    console.log(event.target.value);
    this.classId = event.target.value;
    // debugger;
    this.lessonService.GetByIdLesson(event.target.value).subscribe((res) => {
      this.lessonList = res;
      console.log(this.lessonList);
    });
  }

  onChangeLesson(event: any) {
    console.log(event.target.value);

    this.studentService
      .StudentGetById(this.classId).subscribe((res) => {
        this.studentList = res;
        console.log(this.studentList);
      });
  }
}
