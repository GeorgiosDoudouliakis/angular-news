import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
    pathMatch: 'full',
  },
  {
    path: 'login-page',
    component: LoginPageComponent,
    children: [
      {
        path: 'login-form',
        component: LoginFormComponent,
      },
    ],
  },
  {
    path: 'main-page',
    component: MainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
