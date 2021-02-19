import { Component, OnInit } from '@angular/core';
import { New } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-container',
  template: `
    <section class="news-container">
      <article>
        <app-news></app-news>
      </article>
    </section>
  `,
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit {
  news: New[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.fetchNews().subscribe((articles) => {
      this.news = articles;
    });
  }
}
