import { Component, isDevMode } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login(){
    const isDirector:any=jwtDecode(sessionStorage.getItem("isDirector")!)
    const email=(document.getElementById("email") as HTMLInputElement).value
    const password=(document.getElementById("password") as HTMLInputElement).value

    if(isDirector.email==email&&isDirector.password==password){
      localStorage.setItem("accessToken","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NmNjYWQzOS0xMmI0LTQwZGYtYjk4OC01ZGQ3M2EyYzA5ODciLCJpYXQiOjE3MTYwOTc3OTEsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImRpcmVjdG9yQGdtYWlsLmNvbSIsIkZ1bGxOYW1lIjoiU2FyZG9yIER1c2hhbW92IiwiUm9sZSI6IlRlYWNoZXIiLCJpZCI6ImVlMmY0ODVlLWQxN2UtNDFlMy04ZWE3LTdhNmEzZmVjZWQ4OSIsImV4cCI6MTcxNjEzMzc5MX0.OqpJq3K8uKHd6Q1Lpu3FmcldzUeTqHIVjsC7H7ozm9M")
    }
  }
}
