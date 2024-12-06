import { Component } from '@angular/core';
import { Employee } from '../../../models/employee/employee.module';
import { EmployeeService } from '../../../services/employee.service';
import { CommonModule } from '@angular/common';
import { DashboardNavComponent } from "../dashboard-nav/dashboard-nav.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, DashboardNavComponent, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})

export class EmployeeComponent {
  employees: Employee[] = [];

  employee: any = {
    _id: '',
    firstname: '',
    lastname: '',
    role: ''
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
  getEmployee(id: string) {
    if (id) {
      this.employeeService.getEmployee(id).subscribe({
        next: (employeeData) => {
          this.employee = employeeData; // Assign the fetched data
          console.log('Fetched employee data:', this.employee); // Log the data
        },
        error: (error) => {
          console.error('Error fetching employee:', error);
        }
      });
    } else {
      console.log('Employee ID is not defined.');
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

  //Adds a new employee
  addEmployee() {
      // Validate the form fields
      if (!this.employee.firstname || !this.employee.lastname || !this.employee.role) {
        alert('All fields are required to add an employee.');
        return;
      }
    
      // Call the service to add the employee
      this.employeeService.addEmployee(this.employee).subscribe({
        next: (newEmployee) => {
          console.log('Employee added successfully:', newEmployee);
          this.loadEmployees(); // Refresh the employee list
          this.resetEmployeeForm(); // Clear the form after adding
        },
        error: (error) => {
          console.error('Error adding employee:', error);
          alert('Failed to add employee. Please try again.');
        }
      });
    }  
  
  // Reset form fields after adding an employee
  resetEmployeeForm() {
    this.employee = {
      firstname: '',
      lastname: '',
      role: '',
    };
  }

}