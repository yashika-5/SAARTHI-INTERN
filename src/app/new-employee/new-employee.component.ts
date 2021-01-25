import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  empForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<NewEmployeeComponent>,private employeService: EmployeeService) {
    this.empForm = new FormGroup({
      empName: new FormControl('',[Validators.required]),
      empId: new FormControl('',[Validators.required]),
      department: new FormControl('',[Validators.required]),
      emailId: new FormControl('',[Validators.email]),
      doj: new FormControl('',[Validators.required])

    })
  }

  ngOnInit(): void {}

  addEmployee() {
    console.log(this.empForm.value);
    let user = this.empForm.value;
    this.employeService.employee.push(user);
    this.closeDialog();
  }

  closeDialog(){
    this.dialogRef.close();
  }

  resetForm(){
    this.empForm.reset();
  }

}
