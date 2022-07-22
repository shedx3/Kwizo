import { TestBed } from '@angular/core/testing';

import { SimpService } from './simp.service';

describe('SimpService', () => {
  let service: SimpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
