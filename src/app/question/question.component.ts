import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Question } from '../question';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() question!: Question;

  selectedAnswears: any[] = [];

  get hasSelectedAllAnswears() {
    return this.selectedAnswears.filter(Boolean).length === this.question.correctAnsewarsCount;
  } 
}
