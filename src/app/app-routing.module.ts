import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkComponent } from './drink/drink.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', redirectTo: '/auth/sign', pathMatch: 'full'
      },
      {
        path: '', component: DrinkListComponent
      },
      {
        path: 'drink/:id', component: DrinkComponent
      }
    ]
  },
  {
    path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
