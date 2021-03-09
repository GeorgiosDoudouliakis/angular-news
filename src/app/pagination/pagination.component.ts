import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoryPageSearchService } from '../services/category-page-search.service';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  length = 0;
  pageSize = 6;
  destroy$ = new Subject<void>();

  constructor(
    private newsService: NewsService,
    private categoryPageSearchService: CategoryPageSearchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.newsService
      .fetchNumberOfNews()
      .pipe(takeUntil(this.destroy$))
      .subscribe((articlesNumber) => {
        this.length = articlesNumber;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  pageIndexHandler(event: PageEvent) {
    this.categoryPageSearchService.pageChangeHandler(event.pageIndex + 1);
    this.router.navigate(['/main-page'], {
      queryParams: { page: event.pageIndex + 1 },
      queryParamsHandling: 'merge',
    });
  }
}
