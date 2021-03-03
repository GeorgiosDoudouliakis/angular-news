import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { NewsResponse } from '../models/newsResponse.model';
import { SingleNew } from '../models/single-new.model';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '9cd9fac8c8e8487f90103d97de7b4140';

  constructor(private http: HttpClient) {}

  fetchNews(
    pageNum: number = 1,
    searchName: string = 'a',
    categoryName: string = ''
  ) {
    return this.http
      .get<{ articles: SingleNew[] }>(
        `http://newsapi.org/v2/top-headlines?q=${searchName}&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=${pageNum}&pageSize=6&category=${categoryName}`
      )
      .pipe(pluck('articles'));
  }

  fetchNumberOfNews() {
    return this.http
      .get<NewsResponse>(
        `http://newsapi.org/v2/top-headlines?q=a&apiKey=09b2a48dc89f416caada3626ec05f9eb`
      )
      .pipe(map((response) => +response.totalResults));
  }
}
