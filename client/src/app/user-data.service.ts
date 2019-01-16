import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }
 
  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
  getCarsSmall() {
    let users=[
      {"id":0,"first_name":"Muiz","last_name": "Khan", "country": "Pakistan", "job":"Software Engineer", "salary":2500},
      {"id":1,"first_name":"Muiz 1","last_name": "Khan", "country": "Pakistan", "job":"Software Engineer", "salary":2500},
      {"id":2,"first_name":"Muiz 2","last_name": "Khan", "country": "Pakistan", "job":"Software Engineer", "salary":2500},
      {"id":3,"first_name":"Muiz 3","last_name": "Khan", "country": "Pakistan", "job":"Software Engineer", "salary":2500}
          ];
    return this.http.get('https://reqres.in/api/users')
                .toPromise()
                .then(res => <User[]>users
                  )
                .then(data => { return users; });
   

    // return users
}

}
export interface User {
  
  first_name;
  id;
  last_name;
  country;
  job;
  salary;
}