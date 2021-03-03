import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
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
  _subscription!: Subscription;

  constructor(
    private newsService: NewsService,
    private categoryPageSearchService: CategoryPageSearchService
  ) {}

  ngOnInit(): void {
    this.getNews();

    this._subscription = combineLatest([
      this.categoryPageSearchService.pageNumberChange,
      this.categoryPageSearchService.searchNameChange,
      this.categoryPageSearchService.categoryNameChange,
    ])
      .pipe(debounce(() => timer(200)))
      .subscribe(([pageNum, searchName, categoryName]) => {
        this.pageNumber = pageNum;
        this.searchName = searchName;
        this.categoryName = categoryName;
        this.getNews(this.pageNumber, this.searchName, this.categoryName);
      });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  getNews(pageNumber?: number, searchName?: string, categoryName?: string) {
    this.newsService
      .fetchNews(pageNumber, searchName, categoryName)
      .subscribe((newsData) => {
        this.newsData = newsData;
      });
  }
}
