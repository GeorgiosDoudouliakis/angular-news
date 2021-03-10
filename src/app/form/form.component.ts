import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from '../models/categories.model';
import { CategoryPageSearchService } from '../services/category-page-search.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  categories: string[] = Object.keys(Categories).map((category) =>
    category.toLowerCase()
  );

  constructor(
    private categoryPageSearchService: CategoryPageSearchService,
    private router: Router
  ) {}

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
    this.router.navigate(['/main-page'], {
      queryParams: { search: this.form.value.searchName },
      queryParamsHandling: 'merge',
    });
  }

  categoryChange() {
    this.categoryPageSearchService.categoryChangeHandler(
      this.form.value.category
    );
    this.router.navigate(['/main-page'], {
      queryParams: { category: this.form.value.category },
      queryParamsHandling: 'merge',
    });
  }
}
