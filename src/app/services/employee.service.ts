import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employee:any[] = [];

  constructor() { }
}
