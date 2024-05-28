import { AddMarkService } from '../../../services/add-mark.service';
import { AddcoinService } from '../../../services/addcoin.service';
import { Addcoin } from '../../../models/addcoin';
import { AddMark } from '../../../models/addmark';
import { Component } from '@angular/core';
import { LessonService } from '../../../services/lesson.service';
import { StudentService } from '../../../services/student.service';
import { ClassService } from '../../../services/class.service';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  styleUrl: './add-mark.component.scss',
})
export class AddMarkComponent {
  addmark!: any;
  add_coin!: Addcoin;
  classList: any;
  lessonList: any;
  classId!: number;
  lessonId!: number;
  studentTest!: any;
  isEnter!: any;

  constructor(
    private addmarkService: AddMarkService,
    private addcoinService: AddcoinService,
    private lessonService: LessonService,
    private studentService: StudentService,
    private classService: ClassService
  ) {
    this.classService.GetAllClasses().subscribe((res) => {
      // console.log(res);
      this.classList = res;
    });
    console.log(this.numbers);
  }

  appropricateBody = Array();

  studentId = Array();

  onChangeLesson(event: any) {
    console.log(event.target.value);
    this.lessonId = event.target.value;
  }

  send(e: any) {
    const body = Array();
    const nodeList = e.target.parentNode.childNodes;
    console.log(nodeList);
    for (let index = 0; index < nodeList.length; index++) {
      var obj = {
        studentId: '',
        lessonId: this.classId,
        lessonCoin: 0,
        homeworkCoin: 0,
      };
      const element = nodeList[index];
      // console.dir(element.childNodes)
      if (element.childNodes.length == 2) {
        var value = element.childNodes[1].childNodes[0].childNodes[0];
        obj.studentId = nodeList[index].id;
        console.log(value.value);
        obj.homeworkCoin = Number(value.value);
        value.value = '';
        this.addmarkService.addMark(obj).subscribe({
          next: (data) => {
            // console.log(data);
            body.push(data);
          },
          error: (err) => {
            console.log(err);
          },
        });
        console.log(obj);
      }
      if (body.length > 0) {
        console.log(body);
        alert('Mark added successfully');
      }
    }
  }

  numbers: number[] = [];

  onChangeClass(event: any) {
    // console.log(event.target.value);
    this.classId = event.target.value;
    // debugger;
    this.getStudentsByClassId();
    this.lessonService.GetByIdLesson(event.target.value).subscribe((res) => {
      this.lessonList = res;
      // console.log(this.lessonList);
    });
  }

  getStudentsByClassId() {
    this.studentService.StudentGetById(this.classId).subscribe((res) => {
      // console.log(res);
      // console.log(res.$values[0].firstName)
      this.studentTest = res.students;
      console.log(res.students);
      this.isEnter = true;
    });
  }
}
