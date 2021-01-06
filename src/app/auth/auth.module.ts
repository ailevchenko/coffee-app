import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AuthLayoutComponent, children: [
          {
            path: '', redirectTo: '/auth/login', pathMatch: 'full'
          },
          {
            path: 'login', component: LoginComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AuthModule {
}
