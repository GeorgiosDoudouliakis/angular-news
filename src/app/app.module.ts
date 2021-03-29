import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { HeaderComponent } from './main-page/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsContainerComponent } from './main-page/news-container/news-container.component';
import { SingleNewComponent } from './main-page/news-container/single-new/single-new.component';
import { PaginationComponent } from './main-page/pagination/pagination.component';
import { SearchFormComponent } from './main-page/search-form/search-form.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsContainerComponent,
    SingleNewComponent,
    PaginationComponent,
    SearchFormComponent,
    FooterComponent,
    HeaderComponent,
    SpinnerComponent,
    IntroComponent,
    MainPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
