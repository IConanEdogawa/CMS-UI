import { Component } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { ClassService } from '../../../services/class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrl: './create-class.component.scss'
})
export class CreateClassComponent {

  message=""

  constructor(private teacherService:TeacherService,private classService:ClassService){
    this.getAllTeacher()
    var ex = document.getElementById("teachers")as HTMLSelectElement
        console.log("zdes")
        console.log(ex)
  }

  example(e : any){
    console.log(e.target.value)
    sessionStorage.setItem("teacherName",e.target.value)
  }

  teachers!:any
  class={
    name:"",
    grade:0,
    teacherId:""
  }

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

  createClass(){
    let teacherName=sessionStorage.getItem("teacherName")
    for(const teacher of this.teachers.$values){
      if(teacher.firstName==teacherName){
        this.class.teacherId=teacher.id
        break
      }
    }
    console.log(this.class.name)
    console.log(this.class.grade)
    console.log(this.class.teacherId)

    this.classService.create(this.class).subscribe({
      next:(data)=>{
        if(data.isSuccess==true){
          this.message="Class Created 🏫"
        }
        else{
          this.message=data.message
        }
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
        this.message="Error"
      }
    })
  }

}