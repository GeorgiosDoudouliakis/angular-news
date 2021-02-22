import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
import { News } from './news.model';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiKey = '9cd9fac8c8e8487f90103d97de7b4140';

  constructor(private http: HttpClient) {}

  fetchNews(pageNum: number = 3, pageSize: number = 6): Observable<News[]> {
    return this.http
      .get<{ articles: News[] }>(
        `http://newsapi.org/v2/everything?q=a&apiKey=${this.apiKey}&page=${pageNum}&pageSize=${pageSize}`
      )
      .pipe(pluck('articles'));
  }
}
