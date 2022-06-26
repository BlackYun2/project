import { TestBed } from '@angular/core/testing';

import { TocartService } from './tocart.service';

describe('TocartService', () => {
  let service: TocartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TocartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
