import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { SingleNew } from '../models/single-new.model';
import { CategoryPageSearchService } from '../services/category-page-search.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit {
  newsData: SingleNew[] = [];
  pageNumber = 1;
  categoryName = '';
  searchName = '';

  constructor(
    private newsService: NewsService,
    private categoryPageSearchService: CategoryPageSearchService
  ) {}

  ngOnInit(): void {
    this.getNews();

    combineLatest([
      this.categoryPageSearchService.pageNumberChange,
      this.categoryPageSearchService.categoryNameChange,
      this.categoryPageSearchService.searchNameChange,
    ]).subscribe(([pageNum, categoryName, searchName]) => {
      this.pageNumber = pageNum;
      this.categoryName = categoryName;
      this.searchName = searchName;
      if (categoryName === 'none') {
        this.getNews(this.pageNumber, '', this.searchName);
      } else {
        this.getNews(this.pageNumber, this.categoryName, this.searchName);
      }
    });
  }

  getNews(pageNumber?: number, categoryName?: string, searchName?: string) {
    this.newsService
      .fetchNews(pageNumber, categoryName, searchName)
      .subscribe((newsData) => {
        this.newsData = newsData;
      });
  }
}
