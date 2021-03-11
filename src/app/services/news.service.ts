import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { News } from '../models/news.model';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '9cd9fac8c8e8487f90103d97de7b4140';
  newsNumber = new Subject<number>();

  constructor(private http: HttpClient) {}

  fetchNews(
    pageNum: number = 1,
    searchName: string = 'a',
    categoryName: string = 'general'
  ): Observable<News> {
    const searchParams = new HttpParams()
      .set('q', searchName)
      .set('apiKey', '09b2a48dc89f416caada3626ec05f9eb')
      .set('page', pageNum.toString())
      .set('pageSize', '6')
      .set('category', categoryName);

    return this.http.get<News>('http://newsapi.org/v2/top-headlines', {
      params: searchParams,
    });
  }

  newsNumberHandler(newsNum: number) {
    this.newsNumber.next(newsNum);
  }
}
