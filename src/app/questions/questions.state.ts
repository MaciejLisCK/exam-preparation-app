import { inject, Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { LoadQuestionsAction } from './questions.actions';
import { QuestionsBuilderService } from '../questions-builder.service';
import { Question } from '../question';
import { questions as rawQuestions } from '../../../public/questions';

export interface QuestionsStateModel {
  items: Question[];
}

@State<QuestionsStateModel>({
  name: 'questions',
  defaults: {
    items: []
  }
})
@Injectable()
export class QuestionsState {
  questionsBuilder = inject(QuestionsBuilderService);

  @Selector()
  static getState(state: QuestionsStateModel) {
    return state;
  }

  @Action(LoadQuestionsAction)
  load(ctx: StateContext<QuestionsStateModel>) {
    const questions = this.questionsBuilder.build(rawQuestions); 

    const stateModel = ctx.getState();
    stateModel.items = questions;

    ctx.setState(stateModel);
  }
}
