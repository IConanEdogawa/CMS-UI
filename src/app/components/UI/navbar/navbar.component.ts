import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor() { }
  menuToggle: string = "site-header";

  toggleMenu() {
    if (this.menuToggle === "site-header menu-clicked") {
      this.menuToggle = "site-header";
    } else {
      this.menuToggle = "site-header menu-clicked";
    }
  }
}
