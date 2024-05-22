import { Component } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrl: './create-class.component.scss'
})
export class CreateClassComponent {

  constructor(private teacherService:TeacherService){
    
  }

  teachers!:any

  getAllTeacher(){
    this.teacherService.getAll().subscribe({
      next:(data)=>{
        this.teachers=data
        console.log(this.teachers)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
