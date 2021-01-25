import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch: "full"},
  { path : 'home' , component : HomeComponent},
  { path : 'viewEmployee' , component : ListEmployeesComponent},
  { path : 'addEmployee' , component : NewEmployeeComponent},
  { path : '**' , redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
