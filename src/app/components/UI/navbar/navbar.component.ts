import { Component, ElementRef, ViewChild } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('homeworkHeader') homeworkHeader!: ElementRef;

  menuToggle: string = 'site-header';
  role: any = jwtDecode(localStorage.getItem("accessToken")!);
  toggleMenu() {
    if (this.menuToggle === 'site-header menu-clicked') {
      this.menuToggle = 'site-header';
      this.homeworkHeader.nativeElement.parentNode.nextElementSibling.children[0].children[0].style.width =
        '82vw';
    } else {
      this.menuToggle = 'site-header menu-clicked';
      this.homeworkHeader.nativeElement.parentNode.nextElementSibling.children[0].children[0].style.width =
        '95.7vw';
    }
  }

  ngAfterViewInit() {
    // console.dir(
    //   this.homeworkHeader.nativeElement.parentNode.nextElementSibling
    //     .children[0].style
    // );
    console.log(this.role.Role)
  }
}
