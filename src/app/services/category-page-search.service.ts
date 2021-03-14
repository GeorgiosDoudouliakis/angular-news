import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormValues } from '../models/form-values.model';
@Injectable({
  providedIn: 'root',
})
export class CategoryPageSearchService {
  pageNumberChange = new BehaviorSubject(1);
  searchNameChange = new BehaviorSubject('a');
  categoryNameChange = new BehaviorSubject('');
  formValueChange = new Subject<FormValues>();

  pageChangeHandler(pageNumber: number) {
    this.pageNumberChange.next(pageNumber);
  }

  searchNameChangeHandler(input: string) {
    this.searchNameChange.next(input);
  }

  categoryChangeHandler(categoryName: string) {
    this.categoryNameChange.next(categoryName);
  }

  formValueChangeHandler(formValues: FormValues) {
    this.formValueChange.next(formValues);
  }
}
