import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  users = [
      {id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com', city:'Lahore', age:45},
      {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com', city:'Lahore',age:78},
      {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com', city:'Karachi',age:7},
      {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com' ,city:'Islamabad',age:20},
    ];
  
    
  ngOnInit() {
  }

}
