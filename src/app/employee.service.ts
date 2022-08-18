import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url=environment.url;

  constructor(private http : HttpClient) {}

  public getemployees():Observable<Employee[]>{
    return this.http.get<any>(`${this.url}/employee/all`);
  }

  public addemployees(employee : Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.url}/employee/add`,employee);
  }

  public updateemployees(employee : Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.url}/employee/update`,employee);
  }

  public deleteemployees(employeeId : number):Observable<void>{
    return this.http.delete<void>(`${this.url}/employee/delete/${employeeId}`);
  }

}
