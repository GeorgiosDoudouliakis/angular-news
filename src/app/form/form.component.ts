import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Categories } from '../models/categories.model';
import { CategoryPageSearchService } from '../services/category-page-search.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  categories: string[] = Object.keys(Categories).map((category) =>
    category.toLowerCase()
  );
  destroy$ = new Subject<void>();

  constructor(
    private categoryPageSearchService: CategoryPageSearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      searchName: new FormControl(null),
      category: new FormControl(null),
    });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((changes) => {
        this.categoryPageSearchService.searchNameChangeHandler(
          changes.searchName
        );
        this.categoryPageSearchService.categoryChangeHandler(changes.category);
        this.router.navigate(['/main-page'], {
          queryParams: {
            search: changes.searchName,
            category: changes.category,
          },
          queryParamsHandling: 'merge',
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
