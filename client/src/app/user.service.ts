import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers(){
    let users=[
      {"id":"0","firstname":"Muiz 0","lastname": "Khan","age":2,"role":null,"username":"","createdAt": null,"updatedAt": null, "address": "Pakistan", "job":"Software Engineer", "salary":2500},
      {"id":"1","firstname":"Muiz 1","lastname": "Khan","age":2,"role":null,"username":"","createdAt": null,"updatedAt": null, "address": "Pakistan", "job":"Software Engineer", "salary":2500},
      {"id":"2","firstname":"Muiz 2","lastname": "Khan","age":2,"role":null,"username":"","createdAt": null,"updatedAt": null, "address": "Pakistan", "job":"Software Engineer", "salary":2500},
      {"id":"3","firstname":"Muiz 3","lastname": "Khan","age":2,"role":null,"username":"","createdAt": null,"updatedAt": null, "address": "Pakistan", "job":"Software Engineer", "salary":2500}
          ];
          // return this.http.get('https://reqres.in/api/users')
          // .toPromise()
          // .then(res => <UserVm[]>users
          //   )
          // .then(data => { return users; });
          return users;
  }
}
export class UserVm implements IUserVm {
  createdAt?: Date;
  updatedAt?: Date;
  id?: string;
  username: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  address?: string;
  age?: number;
  salary?: number;
  role?: UserVmRole;

  // constructor(data?: IUserVm) {
  //     if (data) {
  //         for (var property in data) {
  //             if (data.hasOwnProperty(property))
  //                 (<any>this)[property] = (<any>data)[property];
  //         }
  //     }
  // }

  // init(data?: any) {
  //     if (data) {
  //         this.createdAt = data["createdAt"] ? new Date(data["createdAt"].toString()) : <any>undefined;
  //         this.updatedAt = data["updatedAt"] ? new Date(data["updatedAt"].toString()) : <any>undefined;
  //         this.id = data["id"];
  //         this.username = data["username"];
  //         this.firstName = data["firstName"];
  //         this.lastName = data["lastName"];
  //         this.fullName = data["fullName"];
  //         this.address = data["address"];
  //         this.age = data["age"];
  //         this.salary = data["salary"];
  //         this.role = data["role"];
  //     }
  // }

  // static fromJS(data: any): UserVm {
  //     data = typeof data === 'object' ? data : {};
  //     let result = new UserVm();
  //     result.init(data);
  //     return result;
  // }

  // toJSON(data?: any) {
  //     data = typeof data === 'object' ? data : {};
  //     data["createdAt"] = this.createdAt ? this.createdAt.toISOString() : <any>undefined;
  //     data["updatedAt"] = this.updatedAt ? this.updatedAt.toISOString() : <any>undefined;
  //     data["id"] = this.id;
  //     data["username"] = this.username;
  //     data["firstName"] = this.firstName;
  //     data["lastName"] = this.lastName;
  //     data["fullName"] = this.fullName;
  //     data["address"] = this.address;
  //     data["age"] = this.age;
  //     data["salary"] = this.salary;
  //     data["role"] = this.role;
  //     return data; 
  // }
}

export interface IUserVm {
  createdAt?: Date;
  updatedAt?: Date;
  id?: string;
  username: string;
  firstName?: string;
  lastName?: string;
  //fullName?: string;
  address?: string;
  age?: number;
  salary?: number;
  role?: UserVmRole;
}
export enum UserVmRole {
  Admin = "Admin", 
  User = "User", 
}