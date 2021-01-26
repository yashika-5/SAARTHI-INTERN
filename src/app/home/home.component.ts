import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headers= ['EmployeeName','EmployeeId','Department', 'Email', 'Date of Joining','Delete'];
  users :any=[{empName: "Rahul", empId: 1, department: "Marketing", emailId: "rahul@jds.com", doj: "2016-04-05"},{empName: "Ram", empId: 2, department: "Marketing", emailId: "ram@gmail.in", doj: "2019-04-05"},{empName: "Yashu", empId: 3, department: "Marketing", emailId: "yashi@p.in", doj: "2017-04-05"},{empName: "Nishu", empId: 4, department: "Front End", emailId: "sada@sad.co", doj: "0009-07-07"},{empName: "Nikhil", empId: 5, department: "Testing", emailId: "absd@sdas.co", doj: "2010-07-08"},{empName: "Sam", empId: 6, department: "Testing", emailId: "absd@sdas.co", doj: "2010-07-08"}];

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
