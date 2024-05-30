import { Component } from '@angular/core';
import AOS from 'aos';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CMS';

  ngOnInit(): void {
    AOS.init();
    sessionStorage.setItem("isDirector", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcXN1ZEBnbWFpbC5jb20iLCJwYXNzd29yZCI6Ik1hcXN1ZGtoYW4ifQ.jjfSJagYjtlAwUchuugVlJO_-vzATJTTB0VaOCk5F0M")
  }
}
