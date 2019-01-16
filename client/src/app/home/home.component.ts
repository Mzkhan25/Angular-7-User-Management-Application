import { Component, OnInit } from '@angular/core';
import {User, UserDataService } from '../user-data.service';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //users: Object;
  users: User[];
  constructor(private data: UserDataService) { }

  ngOnInit() {
    // this.data.getUsers().subscribe(data => {
    //   this.users = data;
    //   console.log(this.users);
    // });
    this.data.getCarsSmall().then(users => this.users = users);

  }

}
