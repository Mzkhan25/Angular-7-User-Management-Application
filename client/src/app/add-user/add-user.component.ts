import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserVm, UserService } from '../user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  options: FormGroup;
  user: UserVm;
  saveDisabled: boolean;

  constructor(fb: FormBuilder, private _userservice: UserService) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.user = new UserVm();
    this.saveDisabled = true;
  }

  ngOnInit() {
  }
  saveClicked() {
    console.log(this.user);
    const data = this._userservice.saveUser(this.user );
    console.log(data);
  }


}
