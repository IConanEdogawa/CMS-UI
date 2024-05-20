import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {

  constructor(private authService:AuthService){}

  firstName!:string
  lastName!:string
  email!:string
  gender!:number
  day!:number
  month!:number
  year!:number
  country!:string
  region!:string
  district!:string
  homeNumber!:string
  phoneNumber!:string
  parentsPhoneNumber!:string

  genderText!:string

  createStudent(){
    this.firstName=(document.getElementById("firstName") as HTMLInputElement).value
    this.lastName=(document.getElementById("lasttName") as HTMLInputElement).value
    this.email=(document.getElementById("email") as HTMLInputElement).value
    this.gender=this.genderText=="male"?0:1
    this.day=Number((document.getElementById("day") as HTMLInputElement).value)
    this.month=Number((document.getElementById("month") as HTMLInputElement).value)
    this.year=Number((document.getElementById("year") as HTMLInputElement).value)
    this.country=(document.getElementById("country") as HTMLInputElement).value
    this.region=(document.getElementById("region") as HTMLInputElement).value
    this.district=(document.getElementById("district") as HTMLInputElement).value
    this.homeNumber=(document.getElementById("homeNumber") as HTMLInputElement).value
    this.phoneNumber=(document.getElementById("phoneNumber") as HTMLInputElement).value
    this.parentsPhoneNumber=(document.getElementById("parentsPhoneNumber") as HTMLInputElement).value

    //this.authService.createStudent(this.firstName,this.lastName,this.email,this.day,this.month,this.year,this.country,this.region,this.district,this.homeNumber,this.phoneNumber,this.parentsPhoneNumber)
  }

}
