import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryPageSearchService {
  categoryNameChange = new Subject<string>();
  pageNumberChange = new Subject<number>();
  searchNameChange = new Subject<string>();

  categoryChangeHandler(categoryName: string) {
    this.categoryNameChange.next(categoryName);
  }

  pageChangeHandler(pageNumber: number) {
    this.pageNumberChange.next(pageNumber);
  }

  searchNameChangeHandler(input: string) {
    this.searchNameChange.next(input);
  }
}
