import { TestBed } from '@angular/core/testing';

import { PlagiarismSession } from './plagiarism-session';

describe('PlagiarismSession', () => {
  let service: PlagiarismSession;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlagiarismSession);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
