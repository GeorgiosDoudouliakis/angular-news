import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {
    this.newsService.newsNumber
      .pipe(takeUntil(this.destroy$))
      .subscribe((newsNum) => (this.length = newsNum));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  pageIndexHandler(event: PageEvent) {
    this.router.navigate(['/main-page'], {
      queryParams: { page: event.pageIndex + 1 },
      queryParamsHandling: 'merge',
    });
  }
}
