import { TestBed } from '@angular/core/testing';

import { CorLibService } from './cor-lib.service';

describe('CorLibService', () => {
  let service: CorLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
