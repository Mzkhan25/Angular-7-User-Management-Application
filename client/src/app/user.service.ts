import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: HttpClient;
  constructor( http: HttpClient) {
    this.http = http;
  }
  getAllUsers() {
     return this.http.get('http://localhost:3000/users/getAllUsers',
    {
      headers:
          new HttpHeaders(
            {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest'
            }
          )
    })
  .toPromise()
  .then(data => {
    return data;
  }).catch(e => {
    console.log(e);
});
}
getUserById(id: String) {
  let parameters = new HttpParams();
  parameters = parameters.append('id', id.toString());
  return this.http.get('http://localhost:3000/users/getUser',
  {
    headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        ),
        params: parameters
  }
  )
.toPromise()
.then(data => {
 return data;
}).catch(e => {
 console.log(e);
});
}
saveUser(user: any) {
  return this.http.post('http://localhost:3000/users/saveUser',
  {
    headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        ),
    data: user
  })
.toPromise()
.then(data => {
  return data;
}).catch(e => {
  console.log(e);
});
}
deleteUser(id: String) {
  return this.http.post('http://localhost:3000/users/deleteUser',
  {
    headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        ),
    data: id
  })
.toPromise()
.then(data => {
  return data;
}).catch(e => {
  console.log(e);
});
}
}
export class UserVm  {
    first_name: string;
  last_name: string;
  user_name: string;
  fullName: string;
  address: string;
  date_of_birth: number;
  salary: number;
  job: string;
}
