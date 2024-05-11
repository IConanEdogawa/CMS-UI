import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/user/home/home.component';
import { HomeworkComponent } from './components/user/homework/homework.component';
import { ResultComponent } from './components/user/result/result.component';
import { ResultInnerComponent } from './components/user/result-inner/result-inner.component';
import { QuestionListComponent } from './components/user/question-list/question-list.component';
import { AskQuestionComponent } from './components/user/ask-question/ask-question.component';
import { AnswerComponent } from './components/user/answer/answer.component';
import { StartQuizComponent } from './components/user/start-quiz/start-quiz.component';
import { QuizOptionComponent } from './components/user/quiz-option/quiz-option.component';
import { QuizScoreComponent } from './components/user/quiz-score/quiz-score.component';
import { ProfileComponent } from './components/user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeworkComponent,
    ResultComponent,
    ResultInnerComponent,
    QuestionListComponent,
    AskQuestionComponent,
    AnswerComponent,
    StartQuizComponent,
    QuizOptionComponent,
    QuizScoreComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
