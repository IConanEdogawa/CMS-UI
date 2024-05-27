import { AddMarkService } from '../../../services/add-mark.service';
import { AddcoinService } from '../../../services/addcoin.service';
import { Addcoin } from '../../../models/addcoin';
import { AddMark } from '../../../models/addmark';
import { Component } from '@angular/core';
import { LessonService } from '../../../services/lesson.service';
import { StudentService } from '../../../services/student.service';
import { ClassService } from '../../../services/class.service';

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
  studentTest!: any
  isEnter!: any;

  constructor(
    private addmarkService: AddMarkService,
    private addcoinService: AddcoinService,
    private lessonService: LessonService,
    private studentService: StudentService,
    private classService: ClassService
  ) {
    // this.getall();
    
    this.classService.GetAllClasses().subscribe
    ((res) => {
      console.log(res);
      this.classList = res;
    });
    console.log(this.numbers);
  }

  appropricateBody = Array();

  studentId = Array();

  // getall() {
  //   this.addmarkService.getAllAddMark().subscribe({
  //     next: (data) => {
  //       this.addmark = data;
  //       console.log(data);
  //       if (this.addmark != null) {
  //         if (this.addmark.$values != null) {
  //           for (let index = 0; index < this.addmark.$values.length; index++) {
  //             this.numbers.push(index);
  //             // console.log(this.addmark.$values[index].id)
  //             this.studentId.push(this.addmark.$values[index].id);
  //           }
  //         }
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  numbers: number[] = [];
  addcoin(e: any) {
    const body = Array();
    const nodeList = e.target.parentNode.childNodes;
    for (let index = 0; index < nodeList.length; index++) {
      var obj = {
        id: String,
        coin: Number,
      };
      const element = nodeList[index];
      // console.dir(element.childNodes)
      if (element.childNodes.length == 2) {
        var value = element.childNodes[1].childNodes[0].childNodes[0];
        obj.id = this.studentId[index];
        obj.coin = value.value;
        value.value = '';
        body.push(obj);
      }
    }
    console.log(body);

    for (let i = 0; i < body.length; i++) {
      if (body[i].coin == '') continue;
      this.addcoinService.AddCoins(body[i]).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  onChangeClass(event: any) {
    console.log(event.target.value);
    this.classId = event.target.value;
    // debugger;
    this.getStudentsByClassId();
    this.lessonService.GetByIdLesson(event.target.value).subscribe((res) => {
      this.lessonList = res;
      console.log(this.lessonList);
    });

    // this.addmarkService
    //   .getAddMarkById(this.classId)
    //   .subscribe((res) => {
    //     this.addmark = res;
    //     console.log(this.addmark);
    //   });
    
  }

  getStudentsByClassId() {
    this.studentService
      .StudentGetById(this.classId)
      .subscribe((res) => {
        console.log(res);
        // console.log(res.$values[0].firstName)
        this.studentTest = res.students
        this.isEnter = true;
      });
  }

  onChangeLesson(event: any) {
    // console.log(event.target.value);
  }
}
