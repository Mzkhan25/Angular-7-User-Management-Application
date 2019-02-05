import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GraphsComponent } from './graphs/graphs.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addUser', component: AddUserComponent},
  {path: 'addUser/:id', component: AddUserComponent},
  {path: 'userDetail/:id', component: UserDetailComponent},
  {path: 'Graphs', component: GraphsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
