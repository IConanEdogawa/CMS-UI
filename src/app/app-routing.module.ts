import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LoginMenuComponent } from './components/auth/login-menu/login-menu.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"login-menu",component:LoginMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
