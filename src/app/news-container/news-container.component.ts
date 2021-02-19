import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
