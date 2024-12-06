
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee/employee.module';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3000/employees'

  constructor(private http: HttpClient) { }

  //Get employees
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}`);
  }

  //Get employee
  getEmployee(id: string): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  //Update employee
  updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiUrl}`, {
        _id: employee._id,
        firstName: employee.firstname,
        lastName: employee.lastname,
        role: employee.role,
    });
  }

  //Add Employee
  addEmployee(employee: Employee): Observable<Employee> {
    const payload = {
      firstname: employee.firstname,
      lastname: employee.lastname,
      role: employee.role,
    };
  
    console.log('Sending add request for employee:', payload); // Debugging log
    return this.http.post<Employee>(`${this.apiUrl}`, payload);
  }

  //Delete Employee
  deleteEmployee(id: string): Observable<any>{
    const url = `${this.apiUrl}/${id}`;
  console.log('Deleting employee with URL:', url); // Log the URL
  return this.http.delete<any>(url);
  }
    
}