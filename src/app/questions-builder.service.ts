import { inject, Injectable } from '@angular/core';
import { QuestionBuilderService } from './question-builder.service';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsBuilderService {
  questionBuilder = inject(QuestionBuilderService)

  build(rawQuestions: any): Question[] {
    const questions: Question[] = [];

    for (const rawQuestion of rawQuestions) {
      const question = this.questionBuilder.build(rawQuestion);

      questions.push(question);
    }

    return questions;
  }
}
