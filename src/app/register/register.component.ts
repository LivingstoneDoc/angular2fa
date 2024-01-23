import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private builder: FormBuilder, 
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router,
  ) { }

  userData:any;

  registerForm = this.builder.group({
    login:this.builder.control('', Validators.required),
    name:this.builder.control('', Validators.required),
    password:this.builder.control('', Validators.required),
    // password:this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')])),
    // email:this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    // role:this.builder.control(''),
    // isActive:this.builder.control(false),
  });

  proceedRegistration() {
    console.log(this.registerForm);
    
    if (this.registerForm.valid) {
      this.service.proceedRegister(this.registerForm.value).subscribe(res => {
        this.userData = res;
        console.log(this.userData);
        this.toastr.success('Registered successfully');
        this.router.navigate(['login']);
      });
    } else {
      this.toastr.warning('Please enter valid data');
    }
  }

}
