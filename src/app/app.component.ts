import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {GlobalService} from "./global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Login Application';
  validLogin = false;

  constructor(
    private router: Router,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.globalService.setValidLogin.subscribe((msg: any) => {
      this.validLogin = msg.loginStatus;
    })
  }

  isValidLogin() {
    return this.globalService.isValidLogin();
  };
}
