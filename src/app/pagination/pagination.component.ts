import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { NewsService } from '../services/news.service';
import { PageNumService } from '../services/page-num.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  length = 0;
  pageSize = 6;
  pageSizeOptions: number[] = [6];
  _subscription!: Subscription;

  constructor(
    private newsService: NewsService,
    private pageNumService: PageNumService
  ) {}

  ngOnInit() {
    this._subscription = this.newsService
      .fetchAllNews()
      .subscribe((articlesData) => {
        this.length = articlesData.length;
      });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  pageIndexHandler(event: PageEvent) {
    this.pageNumService.pageChangeHandler(event.pageIndex + 1);
  }
}
