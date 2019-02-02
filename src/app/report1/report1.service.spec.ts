import { TestBed } from '@angular/core/testing';

import { Report1Service } from './report1.service';

describe('Report1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Report1Service = TestBed.get(Report1Service);
    expect(service).toBeTruthy();
  });
});
