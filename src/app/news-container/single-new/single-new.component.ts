import { Component, Input } from '@angular/core';
import { SingleNew } from 'src/app/models/single-new.model';

@Component({
  selector: 'app-single-new',
  templateUrl: './single-new.component.html',
  styleUrls: ['./single-new.component.css'],
})
export class SingleNewComponent {
  @Input() singleNew?: SingleNew;
  notAvailableImgPath = '/assets/image_not_available.png';
}
