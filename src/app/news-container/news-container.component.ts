import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { CategoryNameService } from '../services/category-name.service';
import { NewsService } from '../services/news.service';
import { PageNumService } from '../services/page-num.service';
import { SingleNew } from '../single-new.model';
@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit {
  newsData$: Observable<SingleNew[]> = EMPTY;
  pageNumber = 1;
  categoryName = '';

  constructor(
    private newsService: NewsService,
    private pageNumService: PageNumService,
    private categoryNameService: CategoryNameService
  ) {}

  ngOnInit(): void {
    this.getNews();

    // Get the category name when category option is clicked and display the corresponding news with this category in current page
    this.categoryNameService.categoryNameChange.subscribe( categoryName => {
      this.categoryName = categoryName;
      this.getNews(this.pageNumber, categoryName);
    })

    // Get the page number and display corresponding news
    this.pageNumService.pageNumberChange.subscribe((pageNum) => {
        this.pageNumber = pageNum;
        this.getNews(pageNum);
    });
  }

  getNews(pageNumber?: number, categoryName?: string) {
    this.newsData$ = this.newsService.fetchNews(pageNumber, categoryName); 
  }
}
