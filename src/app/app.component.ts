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
    sessionStorage.setItem("isDirector", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpcmVjdG9yQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoibWVuU2hlZm1hbiJ9.NcIN8ZTXGz5Yy-X4tWbe2VgHE7YEf-cwF1pWtwSUfAM")
  }
}
