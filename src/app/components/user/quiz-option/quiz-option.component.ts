import { Component } from '@angular/core';
import { QuizGetall } from '../../../models/quiz-getall';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-quiz-option',
  templateUrl: './quiz-option.component.html',
  styleUrl: './quiz-option.component.scss'
})
export class QuizOptionComponent {

  constructor(private quizService:QuizService){
    this.quizGetAll()
  }

  quiz!:QuizGetall

  question:string=""
  option1:string=""
  option2:string=""
  option3:string=""
  option4:string=""

  score:number=0
  total:number=0

  quizList!:QuizGetall[]
  
  quizGetAll(){
    this.quizService.getAllQuiz().subscribe({
      next:(data)=>{
        this.quizList=data
        console.log("malumot keldi")
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
