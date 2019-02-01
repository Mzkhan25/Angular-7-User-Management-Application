import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserVm} from '../user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  options: FormGroup;
  user: UserVm;
  saveDisabled: boolean;

  constructor(fb: FormBuilder) {
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
    console.log("event");
  }


}
