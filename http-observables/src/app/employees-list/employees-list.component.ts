import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  public employees = [];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

}
