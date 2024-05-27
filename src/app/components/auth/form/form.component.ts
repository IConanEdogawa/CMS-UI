import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ClassService } from '../../../services/class.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {

  constructor(private authService: AuthService, private  classService: ClassService) {
    this.classService.GetAllClasses().subscribe
    ((res) => {
      console.log(res);
      this.classList = res;
    });
   }

  response:string=""

  firstName!: string
  lastName!: string
  email!: string
  gender!: number
  day!: number
  month!: number
  year!: number
  country!: string
  region!: string
  district!: string
  homeNumber!: string
  phoneNumber!: string
  parentsPhoneNumber!: string
  photo!: File
  pdf!: File
  classList!: any
  classId!: string
  genderText!: string
  birthDate!: HTMLInputElement



  getClass(event: any) {
    this.classId = event.target.value
    console.log(this.classId)
  }

  catchFile(cachedPhoto: File) {
    this.photo=cachedPhoto
  }

  getPDF(pdf:any){
    this.pdf=pdf.target.files[0]
  }

  trigger(){
    document.getElementById("unvisable")?.click()
  }

  createStudent() {


    this.firstName = (document.getElementById("firstName") as HTMLInputElement).value
    this.lastName = (document.getElementById("lastName") as HTMLInputElement).value
    this.email = (document.getElementById("email") as HTMLInputElement).value
    this.gender = this.genderText == "male" ? 0 : 1

    this.birthDate = document.getElementById("birthDate") as HTMLInputElement

    console.log((this.birthDate.value).split("-")[0])

    this.day = Number((this.birthDate.value).split("-")[2])
    this.month = Number((this.birthDate.value).split("-")[1])
    this.year = Number((this.birthDate.value).split("-")[0])

    this.country = (document.getElementById("country") as HTMLInputElement).value
    this.region = (document.getElementById("region") as HTMLInputElement).value
    this.district = (document.getElementById("district") as HTMLInputElement).value
    this.homeNumber = (document.getElementById("homeNumber") as HTMLInputElement).value
    this.phoneNumber = (document.getElementById("phoneNumber") as HTMLInputElement).value
    this.parentsPhoneNumber = (document.getElementById("parentsPhoneNumber") as HTMLInputElement).value

    this.authService.createStudent(
      this.firstName, this.lastName, this.email, this.day,
      this.month, this.year, this.country, this.region,
      this.district, this.homeNumber, this.phoneNumber,
      this.parentsPhoneNumber, this.photo, this.pdf, this.classId).subscribe({
        next: (data) => {
          if(data.isSuccess==true)
          {
            this.response="Student created 👨🏿‍🎓"
          }
          else{
            this.response=data.message
          }
          document.getElementById("launch")?.click()
          console.log(data)
        },
        error: (err) => {
          this.response=err.error.title
          document.getElementById("launch")?.click()
          console.log(err)
        }
      })
  }

}
