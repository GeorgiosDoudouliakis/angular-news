import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Subject, timer } from 'rxjs';
import { debounce, takeUntil } from 'rxjs/operators';
import { SingleNew } from '../models/single-new.model';
import { CategoryPageSearchService } from '../services/category-page-search.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit, OnDestroy {
  newsData: SingleNew[] = [];
  pageNumber = 1;
  categoryName = '';
  searchName = '';
  destroy$ = new Subject<void>();

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
      .pipe(takeUntil(this.destroy$))
      .subscribe(([pageNum, searchName, categoryName]) => {
        this.pageNumber = pageNum;
        this.searchName = searchName;
        this.categoryName = categoryName;
        this.getNews(this.pageNumber, this.searchName, this.categoryName);
      });

    // Show news based on the url
    this.retrieveParamsAndShowNews();
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
    this.newsService
      .fetchNews(pageNumber, searchName, categoryName)
      .subscribe((responseData) => {
        this.newsData = responseData.articles;
        this.newsService.newsNumberHandler(+responseData.totalResults);
      });
  }

  private retrieveParamsAndShowNews() {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((queryParams: Params) => {
        this.getNews(
          queryParams['page'] || 1,
          queryParams['search'],
          queryParams['category']
        );
      });
  }
}
