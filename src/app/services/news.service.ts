import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { SingleNew } from '../single-new.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '9cd9fac8c8e8487f90103d97de7b4140';

  constructor(private http: HttpClient) {}

  fetchNews(pageNum: number = 1, categoryName: string = '') {
    return this.http
      .get<{ articles: SingleNew[] }>(
        `http://newsapi.org/v2/top-headlines?q=a&apiKey=${this.apiKey}&page=${pageNum}&pageSize=6&category=${categoryName}`
      )
      .pipe(pluck('articles'));
  }

  fetchAllNews() {
    return this.http
      .get<{ articles: SingleNew[] }>(
        `http://newsapi.org/v2/top-headlines?q=a&apiKey=${this.apiKey}`
      )
      .pipe(pluck('articles'));
  }
}
