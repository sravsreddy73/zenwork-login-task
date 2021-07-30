import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  validLogin = false;
  setValidLogin = new Subject<{}>();
  constructor() { }

  isValidLogin() {
    return this.validLogin;
  }
}
