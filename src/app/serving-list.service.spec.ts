import { TestBed } from '@angular/core/testing';

import { ServingListService } from './serving-list.service';

describe('ServingListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServingListService = TestBed.get(ServingListService);
    expect(service).toBeTruthy();
  });
});
