import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit {
  newsData$?: Observable<News[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsData$ = this.newsService.fetchNews();
  }
}
