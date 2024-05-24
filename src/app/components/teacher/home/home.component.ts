import { Component } from '@angular/core';
import { ClassService } from '../../../services/class.service';
import { LessonService } from '../../../services/lesson.service';
import { HomeworkService } from '../../../services/homework.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  classList: any;
  lessonList: any;
  lessonId!: number;
  tz!: string;

  constructor(
    private readonly classService: ClassService,
    private readonly lessonService: LessonService,
    private readonly homeworkService: HomeworkService
  ) {
    this.classService.GetAllClasses().subscribe((res) => {
      console.log(res);
      this.classList = res;
    });
  }

  onChangeClass(event: any) {
    console.log(event.target.value);
    // debugger;
    this.lessonService.GetByIdLesson(event.target.value).subscribe((res) => {
      this.lessonList = res;
      console.log(this.lessonList);
    });
  }
  
  onChangeLesson(event: any) {
    this.lessonId = event.target.value;
    // console.log(event.target.value);
  }

  submit() {
    var homeworkTz = document.getElementById('homeworkTz') as HTMLInputElement;
    this.tz = homeworkTz.value

    const data = {
      lessonId: this.lessonId,
      tz: this.tz,
    };

    console.log(data);

    this.homeworkService
      .CreateHomework(data)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
