import { TestBed } from '@angular/core/testing';

import { CategoryPageSearchService } from './category-page-search.service';

describe('CategoryPageSearchService', () => {
  let service: CategoryPageSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryPageSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
