import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { FormValues } from '../models/form-values.model';
import { SingleNew } from '../models/single-new.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit, OnDestroy {
  newsData: SingleNew[] = [];
  loading = false;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        filter((params) => params.search),
        takeUntil(this.destroy$)
      )
      .subscribe((params) => {
        if (params.search === 'a' && !params.category) {
          this.getNews(1, { searchName: 'a' });
        } else {
          this.getNews(params.page, {
            searchName: params.search,
            category: params.category,
          });
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getNews(pageNumber: number, formChanges: FormValues) {
    this.loading = true;
    this.newsService
      .fetchNews(pageNumber, formChanges)
      .subscribe((responseData) => {
        this.newsData = responseData.articles;
        this.newsService.newsNumberHandler(+responseData.totalResults);
        this.loading = false;
      });
  }
}
