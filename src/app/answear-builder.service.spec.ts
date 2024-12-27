import { TestBed } from '@angular/core/testing';

import { AnswearBuilderService } from './answear-builder.service';

describe('AnswearBuilderService', () => {
  let service: AnswearBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswearBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
