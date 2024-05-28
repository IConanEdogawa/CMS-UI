import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { StudentService } from '../../../services/student.service';
import { environment } from '../../../../environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {

  constructor(private studentService:StudentService,private location:Location){
    this.id=(jwtDecode(localStorage.getItem("accessToken")!) as any).id
    this.getStudentById()
  }

  student!:any
  path!:string
  id!:string
  hello: any
  direction:string="edit"

  getStudentById(){
    this.studentService.studentGetById(this.id).subscribe({
      next:(data)=>{
        this.student=data
        console.log(data)
        if(this.student){
          if(this.student.photoPath){

            this.path=environment.mainPath+String(this.student.photoPath)
            console.log(this.path)
          }
        }


      },
      error:(err)=>{
        console.log(err)
      }
    })
  }



  mainButton(dir:string){
    if(dir=="edit"){
      this.direction="save"
      this.change()
    }
    else{
      this.direction="edit"
      this.save()
    }
  }

  save(){
    console.log("men ketyapman")
    this.studentService.studentUpdate(this.student).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
    //window.location.reload()
    console.log(this.path)
  }

  change() {
    console.log(this.id)
    var wrapper = document.getElementById("allData") as HTMLElement
    (document.getElementById("edit")as HTMLDivElement).innerHTML="Save"
    console.dir(wrapper.children)

    wrapper.children[0].children[1].innerHTML = `<input [(ngModel)]="this.path" type='text' style='width: 100%; height:40px' value="${wrapper.children[0].children[1].textContent}"/>`
    wrapper.children[1].children[1].innerHTML = `<input type='text' style='width: 100%; height:40px' value="${wrapper.children[1].children[1].textContent}"/>`
    wrapper.children[2].children[1].innerHTML = `<input type='text' style='width: 100%; height:40px' value="${wrapper.children[2].children[1].textContent}"/>`
    wrapper.children[3].children[1].innerHTML = `<input type='text' style='width: 100%; height:40px' value="${wrapper.children[3].children[1].textContent}"/>`
    wrapper.children[4].children[1].innerHTML = `<input type='text' style='width: 100%; height:40px' value="${wrapper.children[4].children[1].textContent}"/>`
    wrapper.children[5].children[1].innerHTML = `<input type='text' style='width: 100%; height:40px' value="${wrapper.children[5].children[1].textContent}"/>`
    wrapper.children[6].children[1].innerHTML = `<input type='text' style='width: 100%; height:40px' value="${wrapper.children[6].children[1].textContent}"/>`
    //wrapper.children[7].children[1].innerHTML = `<input type='text' style='width: 100%; height:40px' value="${wrapper.children[7].children[1].textContent}"/>`

  }
}
