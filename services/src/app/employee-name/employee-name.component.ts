import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/Services/employee.service';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.scss']
})
export class EmployeeNameComponent implements OnInit {

  employeeNames = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeNames = this.employeeService.getEmployees();
  }

}
