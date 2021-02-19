import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-container',
  template: `
    <p>
      news-container works!
    </p>
  `,
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
