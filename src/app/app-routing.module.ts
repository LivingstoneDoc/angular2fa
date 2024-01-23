import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
// import { AuthGuardService } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuardGuard } from './guard/auth-guard.guard';


const routes: Routes = [
  {path:"", component: HomeComponent, canActivate:[AuthGuardGuard]},
  {path:"reg", component: RegisterComponent},
  {path:"login", component:LoginPageComponent},
  {path:"user", component: UserlistingComponent, canActivate:[AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
