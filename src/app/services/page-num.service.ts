import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageNumService {
  pageNumberChange = new Subject<number>();

  pageChangeHandler(pageNumber: number) {
    this.pageNumberChange.next(pageNumber);
  }
}
