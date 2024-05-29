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
  lessonId!: string;
  tz!: string;
  Task: File | null = null

  upload(){
    document.getElementById("real-input")?.click()
  }

  constructor(
    private readonly classService: ClassService,
    private readonly lessonService: LessonService,
    private readonly homeworkService: HomeworkService
  ) {
    this.classService.GetAllClasses().subscribe((res) => {
      this.classList = res;
      this.submit();
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
    console.log(event.target.value);
  }

  data = {
    LessonId: "",
    TZ: "",
    Task: this.Task,
  };

  onFileSelected(event: any) {
    this.Task = event.target.files[0] as File;
    console.log(this.Task, "Task");
  }
  
  
  submit() {
    const tz = document.getElementById("homeworkTz") as HTMLTextAreaElement
    this.data.LessonId = this.lessonId;
    this.data.TZ = tz.value;
    this.data.Task = this.Task;
    console.log(this.Task);
    console.log(this.data);

    this.homeworkService
      .CreateHomework(this.data)
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
