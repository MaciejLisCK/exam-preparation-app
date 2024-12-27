import { Component, inject } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { Observable } from 'rxjs';
import { QuestionsState, QuestionsStateModel } from '../questions/questions.state';
import { Store } from '@ngxs/store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-learn',
  imports: [ QuestionComponent, AsyncPipe ],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.scss'
})
export class LearnComponent {
  store = inject(Store);

  questions$: Observable<QuestionsStateModel> = this.store.select(QuestionsState.getState);
}
