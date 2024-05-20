import { Component, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) { }

  // email!: string;
  // password!: string;
  
  login(){
    const email=(document.getElementById("email") as HTMLInputElement).value
    const password=(document.getElementById("password") as HTMLInputElement).value
    const isDirector:any=jwtDecode(sessionStorage.getItem("isDirector")!)

    if(isDirector.email==email&&isDirector.password==password){
      localStorage.setItem("accessToken","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NmNjYWQzOS0xMmI0LTQwZGYtYjk4OC01ZGQ3M2EyYzA5ODciLCJpYXQiOjE3MTYwOTc3OTEsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImRpcmVjdG9yQGdtYWlsLmNvbSIsIkZ1bGxOYW1lIjoiU2FyZG9yIER1c2hhbW92IiwiUm9sZSI6IlRlYWNoZXIiLCJpZCI6ImVlMmY0ODVlLWQxN2UtNDFlMy04ZWE3LTdhNmEzZmVjZWQ4OSIsImV4cCI6MTcxNjEzMzc5MX0.OqpJq3K8uKHd6Q1Lpu3FmcldzUeTqHIVjsC7H7ozm9M")
    }

    this.authService.login(email, password).subscribe(
      {
        next: res => {
          console.log(res);
          const token:any = jwtDecode(res);
          console.log(token)
          if (token.Role == "Student")
              this.router.navigate(['/student-login']);
          else if (token.Role == "Teacher")
              this.router.navigate(['/teacher-login']);
          return res
        }, error: err => {
          console.log(err.error.text);
          const token:any = jwtDecode(err.error.text);
          console.log(token)
          if (token.Role == "Student")
              this.router.navigate(['/student-login']);
          else if (token.Role == "Teacher")
              this.router.navigate(['/teacher-login']);
          localStorage.setItem("accessToken",err.error.text)

          return err.error.text
        }
      }
    )
  }
}
