import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryNameService } from '../services/category-name.service';
import { NewsService } from '../services/news.service';
import { PageNumService } from '../services/page-num.service';
import { SearchNameService } from '../services/search-name.service';
import { SingleNew } from '../single-new.model';
@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css'],
})
export class NewsContainerComponent implements OnInit, OnDestroy {
  newsData: SingleNew[] = [];
  pageNumber = 1;
  categoryName = '';
  searchName = '';
  _pageNumSub!: Subscription;
  _categoryNameSub!: Subscription;
  _searchNameSub!: Subscription;

  constructor(
    private newsService: NewsService,
    private pageNumService: PageNumService,
    private categoryNameService: CategoryNameService,
    private searchNameService: SearchNameService
  ) {}

  ngOnInit(): void {
    this.getNews();

    // Get the category name when category option is clicked and display the corresponding news with this category in current page
    this._categoryNameSub = this.categoryNameService.categoryNameChange.subscribe( categoryName => {
      this.categoryName = categoryName;
      if(categoryName === 'none') {
        this.getNews(this.pageNumber, '');
      } else {
        this.getNews(this.pageNumber, categoryName);
      }
    })

    // Get the page number and display corresponding news
    this._pageNumSub = this.pageNumService.pageNumberChange.subscribe((pageNum) => {
        this.pageNumber = pageNum;
        this.getNews(pageNum);
    });

    // Get the search input name and display the appropriate news in the current page and category
    this._searchNameSub = this.searchNameService.searchNameChange.subscribe( searchName =>  {
      this.searchName = searchName;
      this.getNews(this.pageNumber, this.categoryName);
    });
  }

  ngOnDestroy() {
    this._categoryNameSub.unsubscribe();
    this._pageNumSub.unsubscribe();
    this._searchNameSub.unsubscribe();
  }

  getNews(pageNumber?: number, categoryName?: string) {
    this.newsService.fetchNews(pageNumber, categoryName).subscribe( newsData => {
      this.newsData = newsData.filter(article => article.title.toLowerCase().trim().includes(this.searchName.toLowerCase()));
    }); 
  }
}
