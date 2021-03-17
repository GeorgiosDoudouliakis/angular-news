import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryPageSearchService {
  readonly pageNumberChange = new BehaviorSubject(1);
  readonly searchNameChange = new BehaviorSubject('a');
  readonly categoryNameChange = new BehaviorSubject('');

  pageChangeHandler(pageNumber: number) {
    this.pageNumberChange.next(pageNumber);
  }

  searchNameChangeHandler(input: string) {
    this.searchNameChange.next(input);
  }

  categoryChangeHandler(categoryName: string) {
    this.categoryNameChange.next(categoryName);
  }
}
