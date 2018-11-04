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
  allUsers: UserVm[];
  age: number;
  filter = {
    name: '' ,
    value: ''

  };
  oper: string;
  filters = [
    {name: 'equal', value: 'eq'},
    {name: 'not equal', value: 'ne'},
    {name: 'greater than' , value: 'gt'},
    {name: 'greater than and equal to' , value: 'gte'},
    {name: 'Less than', value: 'lt'},
    {name: 'Less than and equal to', value: 'lte'},
    ];
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
        this.allUsers = users;
         });
  }
  filterChanged(newObj): any {
this.oper = newObj;
   }
   getFilteredResult(): any {
    this._userClient.filterbyage(false, this.oper, this.age)
    .subscribe((users: UserVm[]) => {
        this.users = users;
         });
   }
   reset(): any {
    this.users =  this.allUsers;
   }
   edit(id): any {
    this._router.navigate(['/userdetail/' + id]);
   }
   delete(id): any {
    this._userClient.delete(id).subscribe(() => {
      this._userClient.getall()
      .subscribe((users: UserVm[]) => {
          this.users = users;
          this.allUsers = users;
           });
       });
   }
}
