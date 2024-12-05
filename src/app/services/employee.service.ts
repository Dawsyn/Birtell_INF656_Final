
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
    console.log('sending uodate request for employee.', employee);
    return this.http.put<Employee>(`${this.apiUrl}`, {
      body: {
        id: employee._id,
        firstName: employee.firstname,
        lastName: employee.lastname}
    });
  }

  //Delete Employee
  deleteEmployee(id: string): Observable<any>{
    return this.http.request<Employee>('delete',`${this.apiUrl}/${id}`,{
      body: {
        id: id
      }
    });
  }
}
