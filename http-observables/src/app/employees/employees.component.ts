import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public employees = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit()  {
    this.employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
