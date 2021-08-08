import { TestBed } from '@angular/core/testing';

import { ComponentsLibService } from './components-lib.service';

describe('ComponentsLibService', () => {
  let service: ComponentsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
