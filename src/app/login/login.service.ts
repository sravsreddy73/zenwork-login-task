import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(userName: String, password: String) {
    //need to call api service and validate username and password
    if(userName === "sravanthi" && password === "zenwork1@1") {
      return "success";
    } else {
      return "failed";
    }
  }
}
