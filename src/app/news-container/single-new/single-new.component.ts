import { Component, Input } from '@angular/core';
import { News } from 'src/app/news.model';

@Component({
  selector: 'app-single-new',
  templateUrl: './single-new.component.html',
  styleUrls: ['./single-new.component.css'],
})
export class SingleNewComponent {
  @Input() singleNew?: News;
}
