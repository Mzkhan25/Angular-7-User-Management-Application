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
  displayedColumns: string[] = ['id','firstname', 'lastname', 'age', 'role','job', 'salary','address'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource();
 

  @ViewChild(MatSort) sort: MatSort;
  constructor(private _userservice:UserService) { }

  ngOnInit() {
    
    this.getusers();
  }
  getusers(){
//this._userservice.getUsers().then(result=> this.allUsers=result);
this.allUsers=this._userservice.getUsers();
this.dataSource = new MatTableDataSource(this.allUsers);
console.log(this.dataSource);
this.dataSource.sort = this.sort;
  };
  
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
const users=[
  {"id":"0","firstname":"Muiz 0","lastname": "Khan","age":2,"role":null,"username":"","createdAt": null,"updatedAt": null, "address": "Pakistan", "job":"Software Engineer", "salary":2500},
  {"id":"1","firstname":"Muiz 1","lastname": "Khan","age":2,"role":null,"username":"","createdAt": null,"updatedAt": null, "address": "Pakistan", "job":"Software Engineer", "salary":2500},
  {"id":"2","firstname":"Muiz 2","lastname": "Khan","age":2,"role":null,"username":"","createdAt": null,"updatedAt": null, "address": "Pakistan", "job":"Software Engineer", "salary":2500},
  {"id":"3","firstname":"Muiz 3","lastname": "Khan","age":2,"role":null,"username":"","createdAt": null,"updatedAt": null, "address": "Pakistan", "job":"Software Engineer", "salary":2500}
      ];