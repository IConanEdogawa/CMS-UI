import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
    email: string = '';
  constructor(private router: Router, private authService: AuthService) {
    
  }
    sendCode(){
        if (this.email === null || this.email.indexOf('@') < 0) {
            alert('Please enter a valid email address');
            this.email = '';
            this.router.navigate(['/forgot-password']);
            return;
        }
        this.router.navigate(['/receive-email-code']);
    }

    submit(){
      this.authService.SendEmail(this.email).subscribe(res => {
        console.log(res);
        this.email = "";
        this.router.navigate(['/login']);
        return res;
      }, err => {
        console.log(err);
      }), () => { 
      }
    }
}
