import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LoginMenuComponent } from './components/auth/login-menu/login-menu.component';
import { TeacherLoginComponent } from './components/teacher/teacher-login/teacher-login.component';
import { FormComponent } from './components/auth/form/form.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"login-menu",component:LoginMenuComponent},
  {path:"teacher-login",component:TeacherLoginComponent},
  {path:"form",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
