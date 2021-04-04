import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { HeaderComponent } from './main-page/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsContainerComponent } from './main-page/news-container/news-container.component';
import { SingleNewComponent } from './main-page/news-container/single-new/single-new.component';
import { PaginationComponent } from './main-page/pagination/pagination.component';
import { SearchFormComponent } from './main-page/search-form/search-form.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
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
    LoginFormComponent,
    SignupPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
