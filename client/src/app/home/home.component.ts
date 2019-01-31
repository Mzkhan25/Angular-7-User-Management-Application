import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {UserVm, UserService } from '../user.service'
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allUsers :UserVm[];
  //displayedColumns: string[] = ['id','firstname', 'lastname', 'age', 'role','job', 'salary','address'];
  displayedColumns: string[] = ['first_name', 'last_name', 'job', 'salary','address'];
 
  dataSource = new MatTableDataSource();
 users : any;

  @ViewChild(MatSort) sort: MatSort;
  constructor(private _userservice:UserService) { }

  ngOnInit() {
    this.getusers();
  }

  getusers()
  {
 this._userservice.getAllUsers().then(result => {
   this.users = result;
   this.dataSource = new MatTableDataSource(this.users);
   this.dataSource.sort = this.sort;
  });

  }
}
