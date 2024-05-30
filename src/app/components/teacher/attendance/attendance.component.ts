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
  lessonId!: string;
  studentList!: any;
  constructor(
    private readonly classService: ClassService,
    private readonly lessonService: LessonService,
    private readonly studentService: StudentService
  ) {
    this.classService.GetAllClasses().subscribe((res) => {
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

    this.studentService.StudentGetById(this.classId).subscribe((res) => {
      this.studentList = res.students.$values;
      console.log(this.studentList);
    });
  }

  onChangeLesson(event: any) {
    console.log(event.target.value);
    console.log(this.classId);
    this.lessonId = event.target.value;
  }

  send() {
    const data = {
      lessonId: this.lessonId,
      studentId: '',
      isPresent: false,
    };

    console.log(this.classId);
    console.log(this.studentList);
    console.log(this.lessonList);
    console.log(this.lessonId);
    const isPresent = document.querySelectorAll(
      '.isPresent'
    ) as NodeListOf<HTMLInputElement>;
    console.log(isPresent);

    // for (let index = 0; index < isPresent.length; index++) {
      
    // }
    this.studentList.forEach((student: any, index: number) => {
      data.studentId = student.id;
      data.isPresent = isPresent[index].checked;
      // const id = element.getAttribute('id');
      // console.log(id);
      // if (element.checked) {
      //   data.isPresent = true;
      // }
      console.log(isPresent[index].checked);
      this.lessonService.PostAttendance(data).subscribe((res) => {
        console.log(res);
      });
    });
  }
}
