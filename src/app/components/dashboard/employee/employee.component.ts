import { Component } from '@angular/core';
import { Employee } from '../../../models/employee/employee.module';
import { EmployeeService } from '../../../services/employee.service';
import { CommonModule } from '@angular/common';
import { DashboardNavComponent } from "../dashboard-nav/dashboard-nav.component";
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, DashboardNavComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})

export class EmployeeComponent {
  employees: Employee[] = [];
  employee: any = {
    _id: '',
    firstname: '',
    lastname: ''
  }

  constructor(private employeeService: EmployeeService) {}

ngOnInit(): void{
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data as Employee[];
    });
}

//updated data
loadEmployees(){
  this.employeeService.getEmployees().subscribe((data: any) => {
  this.employees = data;
  });
}

// Get Employee
getEmployee(id: string){
  if(id){
    this.employeeService.getEmployee(id).subscribe((employeeData) => {
      this.employee = employeeData;
    });
  }
  else {
    console.log("Employee id is not defined.")
  }
}

   //update employees
  updateEmployee() {
    if(this.employee._id && this.employee){
      this.employeeService.updateEmployee(this.employee).subscribe({
        next: (updateEmployee) => {
          console.log("employee successfully updated.", updateEmployee);
          this.loadEmployees();
    },
    error: (error)=>{
      console.error('error updating employee: ', error)
    }
  });
  } else {
      console.log("Employee id is not defined.");
    }
  }

  //delete employee
  deleteEmployee(id: string){
    this.employeeService.deleteEmployee(id).subscribe((response)=>{
      console.log('Employee deleted: ', response)
      this.loadEmployees();
    })
  }
}