import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-container',
  template: `
    <section class="news-container">
      <app-news class="new" *ngFor="let new of news" [new]="new"></app-news>
    </section>
  `,
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit {
  news: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.fetchNews().subscribe((data) => {
      this.news = data.articles;
    });
  }
}
