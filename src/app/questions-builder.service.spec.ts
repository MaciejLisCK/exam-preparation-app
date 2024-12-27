import { TestBed } from '@angular/core/testing';

import { QuestionsBuilderService } from './questions-builder.service';

describe('QuestionsBuilderService', () => {
  let service: QuestionsBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
