import { TestBed } from '@angular/core/testing';
import {  provideStore,  Store } from '@ngxs/store';
import { QuestionsState, QuestionsStateModel } from './questions.state';
import { QuestionsAction } from './questions.actions';

describe('Questions store', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [provideStore([QuestionsState])]
      
    });

    store = TestBed.inject(Store);
  });

  it('should create an action and add an item', () => {
    const expected: QuestionsStateModel = {
      items: ['item-1']
    };
    store.dispatch(new QuestionsAction('item-1'));
    const actual = store.selectSnapshot(QuestionsState.getState);
    expect(actual).toEqual(expected);
  });

});
