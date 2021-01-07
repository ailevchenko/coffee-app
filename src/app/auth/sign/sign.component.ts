import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  constructor(private router: Router) { }

  public href = '';
  public activeIn: boolean;
  public activeOut: boolean;

  ngOnInit(): void {
    this.href = this.router.url;
    this.href.includes('signIn') ? this.activeIn = true : this.activeOut = true;
  }

  public activateTab(nameTab: string): void {
    this.activeIn = false;
    this.activeOut = false;

    nameTab === 'signIn' ? this.activeIn = true : this.activeOut = true;
    console.log(this.activeIn, this.activeOut);
  }

}
