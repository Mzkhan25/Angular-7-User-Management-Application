import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user={
    id:1,
    firstName:'string',
    lastName:'string',
    email:'string',
    city:'string'
  };
  firstName:string;
  lastName:string;
  email:string;
  city:string;
  users = [
    {id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com', city:'Lahore'},
    {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com', city:'Lahore'},
    {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com', city:'Karachi'},
    {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com' ,city:'Islamabad'},
  ];
  constructor() { }

  register(){
    
    
this.users.push(this.user);
console.log(this.users);
  }

  ngOnInit() {
  }

}
