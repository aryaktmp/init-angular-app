import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'home',
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
