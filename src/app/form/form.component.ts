import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryNameService } from '../services/category-name.service';
import { SearchNameService } from '../services/search-name.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  constructor(
    private searchNameService: SearchNameService,
    private categoryNameService: CategoryNameService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      article: new FormControl(null),
      category: new FormControl(null),
    });
  }

  searchNameChange() {
    this.searchNameService.searchNameChangeHandler(this.form.value.article);
  }

  categoryChange() {
    this.categoryNameService.categoryChangeHandler(this.form.value.category);
  }
}
