import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  showDialog(){
    const dialogRef = this.dialog.open(NewEmployeeComponent, {
        width: '750px',
        height: '450px'
    }); 
  }
}
