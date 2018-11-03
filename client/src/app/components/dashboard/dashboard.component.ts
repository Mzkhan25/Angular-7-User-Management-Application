import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserClient, UserVm } from 'src/app/app.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: UserVm[];

   PIE_DATA = [
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ];
 PIE_OPTIONS = {
    title: 'My Daily Activities',
    pieHole : 0.5 //Dognut Chart
  };

  constructor(private _formBuilder: FormBuilder,
    private _userClient: UserClient,
    private _router: Router) {}

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers(): any {
     this._userClient.getall()
    .subscribe((users: UserVm[]) => {
        this.users = users;
         });
  }

}
