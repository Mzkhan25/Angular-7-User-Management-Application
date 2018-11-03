import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserClient } from 'src/app/app.api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private _formBuilder: FormBuilder,
    private _userClient: UserClient,
    private _router: Router) {}
     allusers = [
      {
        'role': 'User',
        'createdAt': '2018-11-01T16:46:43.552Z',
        'updatedAt': '2018-11-01T16:46:43.552Z',
        'username': 'string',
        'firstName': 'John',
        'lastName': 'Doe',
        '__v': 0,
        'fullName': 'John Doe',
        'id': '5bdb2e19ec885c1bd4a6d6ab'
      },
      {
        'role': 'User',
        'createdAt': '2018-11-01T18:25:49.377Z',
        'updatedAt': '2018-11-01T18:25:49.377Z',
        'username': 'aqweqwesd',
        'firstName': 'John',
        'lastName': 'Doe',
        'address': 'Irvine,  CA',
        'salary': 150000,
        'age': 25,
        '__v': 0,
        'fullName': 'John Doe',
        'id': '5bdb459a86c27f4b98c96b2c'
      },
      {
        'role': 'User',
        'createdAt': '2018-11-01T19:24:26.579Z',
        'updatedAt': '2018-11-01T19:24:26.579Z',
        'username': 'str123123ing',
        'firstName': 'John',
        'lastName': 'Doe',
        'address': 'Irvine,  CA',
        'salary': 150000,
        'age': 25,
        '__v': 0,
        'fullName': 'John Doe',
        'id': '5bdb52ff0956ff57f01c34df'
      },
      {
        'role': 'User',
        'createdAt': '2018-11-02T06:50:58.738Z',
        'updatedAt': '2018-11-02T06:50:58.738Z',
        'username': 'muizkhan',
        'firstName': 'Muiz',
        'lastName': 'khan',
        '__v': 0,
        'fullName': 'Muiz khan',
        'id': '5bdbf6ef0fa4bd3b107b3b13'
      }
    ];

  ngOnInit() {
  }

}
