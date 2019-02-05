import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {UserVm, UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit  {

  id: String;
  private sub: any;
  user: any;

  constructor(private route: ActivatedRoute, private _userservice: UserService, private router: Router) {}
  getUser() {
    this._userservice.getUserById(this.id).then(result => {
      this.user = result;
     });
  }

  deleteClicked(){
    console.log(this.user._id);
    this._userservice.deleteUser(this.user._id).then(result => {
      if (result) {

       this.router.navigate(['/']);
      }

    });
  }
  saveClicked(){
    this.router.navigate(['/addUser', this.user._id]);
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getUser();
  }
}
