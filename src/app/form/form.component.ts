import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categories } from '../models/categories.model';
import { CategoryNameService } from '../services/category-name.service';
import { SearchNameService } from '../services/search-name.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  categories: Categories[] = [
    Categories.NONE,
    Categories.BUSINESS,
    Categories.ENTERTAINMENT,
    Categories.GENERAL,
    Categories.HEALTH,
    Categories.SCIENCE,
    Categories.SPORTS,
    Categories.TECHNOLOGY,
  ];

  constructor(
    private searchNameService: SearchNameService,
    private categoryNameService: CategoryNameService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      searchName: new FormControl(null),
      category: new FormControl(null),
    });
  }

  searchNameChange() {
    this.searchNameService.searchNameChangeHandler(this.form.value.searchName);
  }

  categoryChange() {
    this.categoryNameService.categoryChangeHandler(this.form.value.category);
  }
}
