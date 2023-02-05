import { TestBed } from '@angular/core/testing';

import { FirstTableService } from './first-table.service';

describe('FirstTableService', () => {
  let service: FirstTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
