import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categories } from '../models/categories.model';
import { CategoryPageSearchService } from '../services/category-page-search.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  categories: Categories[] = [
    Categories.BUSINESS,
    Categories.ENTERTAINMENT,
    Categories.GENERAL,
    Categories.HEALTH,
    Categories.SCIENCE,
    Categories.SPORTS,
    Categories.TECHNOLOGY,
  ];

  constructor(private categoryPageSearchService: CategoryPageSearchService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      searchName: new FormControl(null),
      category: new FormControl(null),
    });
  }

  searchNameChange() {
    this.categoryPageSearchService.searchNameChangeHandler(
      this.form.value.searchName
    );
  }

  categoryChange() {
    this.categoryPageSearchService.categoryChangeHandler(
      this.form.value.category
    );
  }
}
