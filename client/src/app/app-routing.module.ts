import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GraphsComponent } from './graphs/graphs.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'graphs',component: GraphsComponent},
  {path:'addUser',component: AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
