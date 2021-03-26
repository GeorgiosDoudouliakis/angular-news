import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormValues } from '../models/form-values.model';
import { News } from '../models/news.model';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private readonly apiKey = '9cd9fac8c8e8487f90103d97de7b4140';
  readonly newsNumber = new Subject<number>();

  constructor(private http: HttpClient) {}

  fetchNews(
    pageNum: number = 1,
    formChanges: FormValues = { searchName: 'a' }
  ): Observable<News> {
    let searchParams = new HttpParams()
      .set('q', formChanges.searchName)
      .set('apiKey', this.apiKey)
      .set('page', pageNum.toString())
      .set('pageSize', '6');

    if (formChanges.category && formChanges.category !== '') {
      searchParams = searchParams.set('category', formChanges.category);
    }

    return this.http.get<News>('http://newsapi.org/v2/top-headlines', {
      params: searchParams,
    });
  }

  newsNumberHandler(newsNum: number) {
    this.newsNumber.next(newsNum);
  }
}
