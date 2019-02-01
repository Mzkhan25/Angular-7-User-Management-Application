import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http: HttpClient;
  constructor( http: HttpClient) {
    this.http = http;
  }
  getAllUsers() {
     return this.http.get('http://localhost:3000/users/',
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
saveUser(user: any){

}

}
export class UserVm  {
  _id?: string;
  first_name: string;
  last_name?: string;
  user_name?: string;
  fullName?: string;
  address?: string;
  date_of_birth?: number;
  salary?: number;
  job?: string;
}
