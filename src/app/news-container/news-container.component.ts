import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subject, timer } from 'rxjs';
import { debounce, takeUntil, withLatestFrom } from 'rxjs/operators';
import { SingleNew } from '../models/single-new.model';
import { CategoryPageSearchService } from '../services/category-page-search.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit, OnDestroy {
  newsData?: SingleNew[];
  loading = false;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private newsService: NewsService,
    private categoryPageSearchService: CategoryPageSearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.categoryPageSearchService.pageNumberChange,
      this.categoryPageSearchService.searchNameChange.pipe(
        debounce(() => timer(300))
      ),
      this.categoryPageSearchService.categoryNameChange,
    ])
      .pipe(withLatestFrom(this.route.queryParams), takeUntil(this.destroy$))
      .subscribe(([[pageNum, searchName, categoryName], params]) => {
        if (params.search || params.category || params.page) {
          this.categoryPageSearchService.formValueChangeHandler({
            searchName: params.search || 'a',
            category: params.category || '',
          });
          this.getNews(params.page, params.search, params.category);
        } else {
          this.getNews(pageNum, searchName, categoryName);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getNews(
    pageNumber: number,
    searchName: string,
    categoryName: string
  ) {
    this.loading = true;
    this.newsService
      .fetchNews(pageNumber, searchName, categoryName)
      .subscribe((responseData) => {
        this.newsData = responseData.articles;
        this.newsService.newsNumberHandler(+responseData.totalResults);
        this.loading = false;
      });
  }
}
