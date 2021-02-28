import { TestBed } from '@angular/core/testing';

import { CategoryNameService } from './category-name.service';

describe('CategoryNameService', () => {
  let service: CategoryNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
