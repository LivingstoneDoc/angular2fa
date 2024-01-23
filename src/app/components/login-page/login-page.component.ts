import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router,
  ) { sessionStorage.clear(); }

  qrDataString: string = "";

  loginForm = this.builder.group({
    login: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  login2faForm = this.builder.group({
    code: this.builder.control('', Validators.required),
  })

  show1fa = true;
  show2fa = false;

  proceedLogin() {
    if (this.loginForm.valid) {
      //   this.service.proceedRegister(this.registerForm.value).subscribe(res => {
      //     this.toastr.success('Registered successfully');
      //     this.router.navigate(['login']);
      //   });
      // } else {
      //   this.toastr.warning('Please enter valid data');
      // }
      this.service.loginReq(this.loginForm.value).subscribe(res => {
        console.log(res);
        this.qrDataString = (res as any).qrImage;
        sessionStorage.setItem("auth_session", (res as any).auth_session)
        this.show1fa = false;
        this.show2fa = true;
      });


    }

  }

  proceed2FA() {
    if (!this.login2faForm.valid) {
      this.toastr.warning('Please enter code');
      return;
    }

    const data = {
      key: this.login2faForm.value.code,
      auth_session: sessionStorage.getItem("auth_session"),
    }

    this.service.loginReq(data).subscribe(response => {
      console.log(response);
      sessionStorage.setItem("isAuthorized", "true")
      this.router.navigate(['']);
    });
  }
}