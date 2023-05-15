import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  EmployeeList: any;
  EmployeeSalary: any;
  
  ngOnInit() {
    this.loadEmployee();
    this.loadSalary();
  }
  
  constructor(
    public employeeService: EmployeeService
  ){ }

   loadEmployee() {
    return this.employeeService.GetEmployee(1).subscribe(data => {
      this.EmployeeList = data;
    })
  }

  loadSalary() {
    return this.employeeService.GetSalary(1).subscribe(data => {
      this.EmployeeSalary = data;
    })
  }
}