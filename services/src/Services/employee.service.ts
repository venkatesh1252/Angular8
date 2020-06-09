import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      {"id": 1, "name": "Steve", "age": 30, "sex": "Male"},
      {"id": 2, "name": "Jessica", "age": 45, "sex": "Female"},
      {"id": 3, "name": "Mike", "age": 25, "sex": "Male"},
      {"id": 4, "name": "Kim", "age":55, "sex": "Female"}
    ];
  }
}
