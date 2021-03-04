import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoryPageSearchService {
  pageNumberChange = new BehaviorSubject(1);
  searchNameChange = new BehaviorSubject('a');
  categoryNameChange = new BehaviorSubject('');

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
