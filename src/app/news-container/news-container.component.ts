import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { NewsService } from '../news.service';
import { SingleNew } from '../single-new.model';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit {
  newsData$: Observable<SingleNew[]> = EMPTY;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.newsData$ = this.newsService.fetchNews();
  }
}
