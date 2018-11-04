import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserClient, UserVm } from 'src/app/app.api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit,OnDestroy {
  id: string;
  param: string;
  private sub: any;
  users: UserVm;
  form: FormGroup;
  constructor(private route: ActivatedRoute, private _userClient: UserClient,private _formBuilder: FormBuilder,) {

   }

   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       this.getUserDetail();
    });
  }
  getUserDetail(): any {
      this._userClient.userbyid(this.id) .subscribe((users: UserVm) => {
      this.users = users;
      console.log(users);
       });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
