import { inject, Injectable } from '@angular/core';
import { Question } from './question';
import { AnswearBuilderService } from './answear-builder.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionBuilderService {
  answearBuilder = inject(AnswearBuilderService);

  build(rawQuestion: any): Question {
    const question = new Question();

    question.id = crypto.randomUUID();
    question.text = rawQuestion.text;
    question.answears = [];
    for (const rawAnswear of rawQuestion.answears) {
      const answear = this.answearBuilder.build(rawAnswear);

      question.answears.push(answear);
    }

    question.correctAnsewarsCount = question.answears.filter(a => a.isCorrect).length;
    question.isMultipleChoice = question.correctAnsewarsCount > 1;

    return question;
  }
}
