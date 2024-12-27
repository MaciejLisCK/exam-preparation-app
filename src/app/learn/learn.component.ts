import { Component } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { questions } from '../../../public/questions';

@Component({
  selector: 'app-learn',
  imports: [ QuestionComponent ],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss'
})
export class LearnComponent {
  questions = questions;
}
