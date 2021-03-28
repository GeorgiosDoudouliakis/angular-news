import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Categories } from '../../models/categories.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  categories: string[] = Object.keys(Categories).map((category) =>
    category.toLowerCase()
  );
  private readonly destroy$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      searchName: new FormControl(null),
      category: new FormControl(null),
    });

    this.form.valueChanges
      .pipe(debounceTime(300), takeUntil(this.destroy$))
      .subscribe((changes) => {
        this.router.navigate(['/main-page'], {
          queryParams: {
            search: changes.searchName,
            category: changes.category,
          },
          queryParamsHandling: 'merge',
        });
      });

    this.activatedRoute.queryParams.subscribe((params) => {
      this.form?.setValue({
        searchName: params.search || null,
        category: params.category || null,
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
