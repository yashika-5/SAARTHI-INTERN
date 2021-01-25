import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headers= ['EmployeeName','EmployeeId','Department', 'Email', 'Date of Joining','Delete'];
  users :any=[{empName: "nk", empId: 1, department: "Marketing", emailId: "asd@jds.c", doj: "1020-04-05"},{empName: "nk", empId: 1, department: "Marketing", emailId: "asd@jds.c", doj: "1020-04-05"},{empName: "nk", empId: 1, department: "Marketing", emailId: "asd@jds.c", doj: "1020-04-05"},{empName: "oiu", empId: 2, department: "Front End", emailId: "sada@sad.co", doj: "0009-07-07"},{empName: "kjh", empId: 4, department: "Testing", emailId: "absd@sdas.co", doj: "2010-07-08"},{empName: "kjh", empId: 4, department: "Testing", emailId: "absd@sdas.co", doj: "2010-07-08"}];

  constructor(private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeService.employee = this.users;
  }
   
  deleteUser(user : any){
    if (confirm("Do you want to delete "  + " ?")) {
      const index = this.users.indexOf(user)
      this.users.splice(index, 1);  
    }
    console.log(this.employeService.employee);
  }
}
