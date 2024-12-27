import { CommonModule } from '@angular/common';
import { Component, Input, input, InputSignal } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  imports: [ CommonModule ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() question!: Question;
}
