import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserClient, UserVm, ApiException } from 'src/app/app.api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit, OnDestroy {
  id: string;
  param: string;
  private sub: any;
  users: UserVm;
  form: FormGroup;
  constructor(private route: ActivatedRoute, private _userClient: UserClient, private _formBuilder: FormBuilder ) {

   }

   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.getUserDetail();
    });
    this.initForm();
  }
  getUserDetail(): any {
      this._userClient.userbyid(this.id) .subscribe((users: UserVm) => {
      this.users = users;
      console.log(users);
      this.form = this._formBuilder.group({
        username: users.username,
        firstName: users.firstName,
        lastName: users.lastName,
        address: users.address,
        age: users.age,
        salary: '32'
    });
   
  });
}
onSubmit() {


  const userVm: UserVm = new UserVm(this.form.value);
  userVm.id = this.users.id;
  console.log(userVm);
    this._userClient.updateuser(userVm)
        .pipe(catchError((err: ApiException) => throwError(err)))
        .subscribe((user: UserVm) => {
            console.log(user);
        }, (err: ApiException) => {
            console.log(err);
        });
}
  initForm() {
    this.form = this._formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        firstName: '',
        lastName: '',
        address: '',
        age: Number,
        salary: Number,
    });
}
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
