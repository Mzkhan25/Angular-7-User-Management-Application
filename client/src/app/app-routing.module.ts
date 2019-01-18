import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GraphsComponent } from './graphs/graphs.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'Graphs',component: GraphsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
