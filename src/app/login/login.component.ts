import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {GlobalService} from "../global.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    username: ['', Validators.required], password: ['', Validators.required]});
  loading = false;
  submitted = false;
  result: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private globalService: GlobalService
  ) {}

  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.globalService.setValidLogin.next({ loginStatus: false });
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.result = this.loginService.login(this.f.username.value, this.f.password.value);
    if(this.result === "success") {
      this.globalService.setValidLogin.next({ loginStatus: true });
      this.router.navigate(['/home']);
    } else {
      this.f.password.setErrors(Validators.pattern("error"));
      this.globalService.setValidLogin.next({ loginStatus: false });
      this.router.navigate(['/login']);

    }
  }
}
