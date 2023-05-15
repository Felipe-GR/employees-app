import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  EmployeesList: any = [];

  ngOnInit() {
    this.loadEmployees();
  }
  
  constructor(
    public employeeService: EmployeeService
  ){ }

   loadEmployees() {
    return this.employeeService.GetEmployees().subscribe((data: {}) => {
      this.EmployeesList = data;
    })
  }
}