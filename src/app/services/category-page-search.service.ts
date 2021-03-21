import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormValues } from '../models/form-values.model';
@Injectable({
  providedIn: 'root',
})
export class CategoryPageSearchService {
  readonly pageNumberChange = new BehaviorSubject(0);
  readonly formChange = new BehaviorSubject({
    searchName: 'a',
    category: '',
  });

  pageChangeHandler(pageNumber: number) {
    this.pageNumberChange.next(pageNumber);
  }

  formChangeHandler(formValues: FormValues) {
    this.formChange.next(formValues);
  }
}
