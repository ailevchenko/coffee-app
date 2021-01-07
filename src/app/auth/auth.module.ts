import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SignComponent } from './sign/sign.component';
import { SignInComponent } from './sign/sign-in/sign-in.component';
import { SignOutComponent } from './sign/sign-out/sign-out.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    SignComponent,
    SignInComponent,
    SignOutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AuthLayoutComponent, children: [
          {
            path: '', redirectTo: '/auth/sign', pathMatch: 'full'
          },
          {
            path: 'sign', component: SignComponent, children: [
              {
                path: 'signIn', component: SignInComponent
              },
              {
                path: 'signOut', component: SignOutComponent
              }
            ]
          }
        ]
      }
    ]),
  ],
  exports: [
    RouterModule
  ]
})

export class AuthModule {
}
