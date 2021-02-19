import { Component, Input } from '@angular/core';
import { New } from 'src/app/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  @Input() new: New = {
    source: {
      id: '',
      name: '',
    },
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: '',
  };
}
