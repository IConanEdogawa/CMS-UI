import { ResultInnerComponent as StudentResultInner } from './components/user/result-inner/result-inner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LoginMenuComponent } from './components/auth/login-menu/login-menu.component';
import { HomeComponent as UserHome } from './components/user/home/home.component';
import { TeacherLoginComponent } from './components/teacher/teacher-login/teacher-login.component';
import { FormComponent } from './components/auth/form/form.component';
import { SolutionsComponent } from './components/teacher/solutions/solutions.component';
import { EventsComponent } from './components/teacher/events/events.component';
import { HomeworkComponent as UserHomework } from './components/user/homework/homework.component';
import { StudentLoginComponent } from './components/user/student-login/student-login.component';
import { StudentProfileComponent } from './components/user/student-profile/student-profile.component';
import { ResultComponent as StudentResult } from './components/user/result/result.component';
import { QuizOptionComponent } from './components/user/quiz-option/quiz-option.component';
import { QuestionListComponent } from './components/user/question-list/question-list.component';
import { AskQuestionComponent } from './components/user/ask-question/ask-question.component';
import { AnswerComponent } from './components/user/answer/answer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-menu', component: LoginMenuComponent },
  { path: 'teacher-login', component: TeacherLoginComponent },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'form', component: FormComponent },
  { path: 'user-home', component: UserHome },
  { path: 'notice-events', component: EventsComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'user-homework', component: UserHomework },
  { path: 'student-profile', component:   StudentProfileComponent },
  { path: 'student-result', component: StudentResult }, 
  { path: 'inner-result', component: StudentResultInner },
  { path: 'student-question-list', component:QuestionListComponent},
  { path: 'student-ask-question', component:AskQuestionComponent},
  { path: 'student-answer', component: AnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
