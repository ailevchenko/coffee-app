import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  constructor() { }

  public showPassword: boolean;
  public showConfirmPassword: boolean;

  ngOnInit(): void {
  }

  public onShowPassword(): void {
    this.showPassword = !this.showPassword;
    const typeValue =  this.showPassword ? 'text' : 'password';

    document.querySelector('#signOut__password').setAttribute('type', typeValue);
  }

  public onShowConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
    const typeValue =  this.showConfirmPassword ? 'text' : 'password';

    document.querySelector('#signOut__passwordConfirm').setAttribute('type', typeValue);
  }

}
