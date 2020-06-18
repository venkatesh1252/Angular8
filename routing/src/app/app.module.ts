import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentslistComponent } from './departmentslist/departmentslist.component';
import {HttpClientModule} from '@angular/common/http'
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    EmployeesListComponent,
    PageNotFoundComponent,
    DepartmentslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
