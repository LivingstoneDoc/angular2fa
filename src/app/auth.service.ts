import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ɵparseCookieValue } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // apiUrl = 'http://localhost:3000/user';

  private apiUrl = 'http://localhost:4200/api/';
  private apiUrlReg = 'http://localhost:4200/api/reg';
  private apiUrlLog = 'http://localhost:4200/api/login';

  getAll() {
    return this.http.get(this.apiUrl);
  }

  loginReq(inputData: any) {
    return this.http.post(this.apiUrlLog, inputData);
  }

  proceedRegister(inputData: any) {
    return this.http.post(this.apiUrlReg, inputData);
  }

  isLoggedIn() {
    return sessionStorage.getItem("isAuthorized") === "true";
  }
}
