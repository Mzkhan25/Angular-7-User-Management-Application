import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserVm, UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  options: FormGroup;
  user: UserVm;
  id: String;
  private sub: any;
  saveDisabled: boolean;
  constructor(fb: FormBuilder, private _userservice: UserService, private router: Router, private route: ActivatedRoute) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.user = new UserVm();
    this.saveDisabled = true;
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.id = this.route.snapshot.params['id'];
      this.getUser();
    }
  }
  getUser() {
    this._userservice.getUserById(this.id).then(result => {
      this.user = result as UserVm;
     });
    }
  saveClicked() {
    if (this.route.snapshot.params['id']) {
      this._userservice.updateUser(this.user ).then(result => {
        if (result) {

         this.router.navigate(['/']);
        }

      });
    } else {
      this._userservice.saveUser(this.user ).then(result => {
        if (result) {

         this.router.navigate(['/']);
        }

      });
    }

  }


}
