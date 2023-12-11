import { TestBed } from '@angular/core/testing';

import { NomserviceService } from './nomservice.service';

describe('NomserviceService', () => {
  let service: NomserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
