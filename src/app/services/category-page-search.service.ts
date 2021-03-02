import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryPageSearchService {
  categoryNameChange = new BehaviorSubject('');
  pageNumberChange = new BehaviorSubject(1);
  searchNameChange = new BehaviorSubject('');

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
