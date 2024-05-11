import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/teacher/home/home.component';
import { StudentRegistrationComponent } from './components/teacher/student-registration/student-registration.component';
import { HomeworkComponent } from './components/teacher/homework/homework.component';
import { AttendanceComponent } from './components/teacher/attendance/attendance.component';
import { ResultComponent } from './components/teacher/result/result.component';
import { AddMarkComponent } from './components/teacher/add-mark/add-mark.component';
import { EventsComponent } from './components/teacher/events/events.component';
import { SolutionsComponent } from './components/teacher/solutions/solutions.component';
import { ChoosePanelComponent } from './components/auth/choose-panel/choose-panel.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ConfirmCodeComponent } from './components/auth/confirm-code/confirm-code.component';
import { NewPasswordComponent } from './components/auth/new-password/new-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentRegistrationComponent,
    HomeworkComponent,
    AttendanceComponent,
    ResultComponent,
    AddMarkComponent,
    EventsComponent,
    SolutionsComponent,
    ChoosePanelComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ConfirmCodeComponent,
    NewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
