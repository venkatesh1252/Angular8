import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeDetails = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeDetails = this._employeeService.getEmployees();
  }

}
