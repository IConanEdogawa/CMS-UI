import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LoginMenuComponent } from './components/auth/login-menu/login-menu.component';
import { HomeComponent as UserHome } from './components/user/home/home.component';
import { TeacherLoginComponent } from './components/teacher/teacher-login/teacher-login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-menu', component: LoginMenuComponent },
  { path: 'user-home', component: UserHome },
  {path:"teacher-login",component:TeacherLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
