import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
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

  constructor(
    private newsService: NewsService,
    private pageNumService: PageNumService
  ) {}

  ngOnInit(): void {
    this.getNews();

    this.pageNumService.pageNumberChange.subscribe((value) => {
      this.getNews(value);
    });
  }

  getNews(pageNumber?: number) {
    this.newsData$ = this.newsService.fetchNews(pageNumber);
  }
}
