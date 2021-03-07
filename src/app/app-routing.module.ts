import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsContainerComponent } from './news-container/news-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', component: NewsContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
