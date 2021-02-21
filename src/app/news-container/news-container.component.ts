import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-container',
  template: `
    <section class="news-container">
      <app-news
        class="new"
        *ngFor="let news of newsData"
        [news]="news"
      ></app-news>
    </section>
  `,
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit {
  newsData: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.fetchNews().subscribe((data) => {
      this.newsData = data.articles;
    });
  }
}
