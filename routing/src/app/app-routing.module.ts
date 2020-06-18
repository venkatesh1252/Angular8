import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentslistComponent } from './departmentslist/departmentslist.component';


const routes: Routes = [
  { path: '', redirectTo: '/department', pathMatch: 'full' },
  { path: 'department', component: DepartmentListComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'courses', component: DepartmentslistComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
