import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

  // constructor(private service:AuthService) { }

  // userList:any;

  // LoadUser() {
  //   this.service.getAll().subscribe(res => {
  //     this.userList = res;
  //   });
  // }

}
