import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryNameService  {
  categoryNameChange = new Subject<string>();
 
  categoryChangeHandler(categoryName: string) {
    this.categoryNameChange.next(categoryName);
  }
}
