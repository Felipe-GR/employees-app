import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from './employee';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {
  baseurl = 'https://localhost:7208';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  GetEmployee(id): Observable<Employee> {
    return this.http
      .get<Employee>(this.baseurl + '/Employee/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  GetSalary(id): Observable<Employee> {
    return this.http
      .get<Employee>(this.baseurl + '/Employee/' + id + '/annualWage')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  GetEmployees(): Observable<Employee> {
    return this.http
      .get<Employee>(this.baseurl + '/Employee/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);

    return throwError(() => {
      return errorMessage;
    });
  }
}