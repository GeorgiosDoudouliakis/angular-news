import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  fetchNews() {
    return this.http.get<{ articles: News[] }>(
      'http://newsapi.org/v2/everything?q=a&apiKey=9cd9fac8c8e8487f90103d97de7b4140&page=3&pageSize=6'
    );
  }
}
