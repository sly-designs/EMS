import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/ems";

  constructor(private httpClient: HttpClient) { }
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`+ "/employees");
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}` + "/add" , employee);
  }

  getEmployeeById(id?: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}` + "/find/" + `${id}`);
  }

  updateEmployee( employee: Employee, id?: number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+ "/update/" +`${id}` , employee);
  }

  deleteEmployee(id?: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+ "/delete/" +`${id}`);
  }
}