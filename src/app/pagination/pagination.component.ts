import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NewsService } from '../services/news.service';
import { PageNumService } from '../services/page-num.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  length = 0;
  pageSize = 6;
  pageSizeOptions: number[] = [6];

  constructor(
    private newsService: NewsService,
    private pageNumService: PageNumService
  ) {}

  ngOnInit() {
    this.newsService.fetchAllNews().subscribe((articlesData) => {
      this.length = articlesData.length;
    });
  }

  pageIndexHandler(event: PageEvent) {
    this.pageNumService.pageChange(event.pageIndex + 1);
  }
}
