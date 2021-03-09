import { HttpClient, HttpParams } from '@angular/common/http';
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
    categoryName: string = 'general'
  ) {
    const searchParams = new HttpParams()
      .set('q', searchName)
      .set('apiKey', this.apiKey)
      .set('page', pageNum.toString())
      .set('pageSize', '6')
      .set('category', categoryName);

    return this.http
      .get<{ articles: SingleNew[] }>('http://newsapi.org/v2/top-headlines', {
        params: searchParams,
      })
      .pipe(pluck('articles'));
  }

  fetchNumberOfNews() {
    return this.http
      .get<NewsResponse>(
        `http://newsapi.org/v2/top-headlines?q=a&apiKey=${this.apiKey}`
      )
      .pipe(map((response) => +response.totalResults));
  }
}
