import { Component, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  // email!: string;
  // password!: string;

  login() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;
    const isDirector: any = jwtDecode(sessionStorage.getItem('isDirector')!);

    if (isDirector.email == email && isDirector.password == password) {
      
      const accessToken: any = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NmNjYWQzOS0xMmI0LTQwZGYtYjk4OC01ZGQ3M2EyYzA5ODciLCJpYXQiOjE3MTYwOTc3OTEsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Im1hcXN1ZEBnbWFpbC5jb20iLCJGdWxsTmFtZSI6Ik1hcXN1ZCBUb3JheWV2IiwiUm9sZSI6IlRlYWNoZXIiLCJpZCI6ImVlMmY0ODVlLWQxN2UtNDFlMy04ZWE3LTdhNmEzZmVjZWQ4OSIsImV4cCI6MTcxNjEzMzc5MX0.UpkndwyC0dMyNSVH5wCIPWnkDYTMduCEjV9gHks6UzI";
      
      localStorage.setItem(
        'accessToken',
        accessToken
      );

      const token: any = jwtDecode(accessToken);
      
      if (token.Role == 'Student') this.router.navigate(['/student-login']);
      else if (token.Role == 'Teacher')
        this.router.navigate(['/teacher-login']);
    } else {
      this.authService.login(email, password).subscribe({
        next: (res) => {
          window.alert("Success")
          const token: any = jwtDecode(res);
          console.log(token);
          if (token.Role == 'Student') this.router.navigate(['/student-login']);
          else if (token.Role == 'Teacher')
            this.router.navigate(['/teacher-login']);
          console.log("xatooooo")
          return res;
        },
        error: (err) => {
          window.alert("Success")
          const token: any = jwtDecode(err.error.text);
          console.log(err);
          if (token.Role == 'Student') this.router.navigate(['/student-login']);
          else if (token.Role == 'Teacher')
            this.router.navigate(['/teacher-login']);
          localStorage.setItem('accessToken', err.error.text);

          return err.error.text;
        },
      });
    }
  }
}
