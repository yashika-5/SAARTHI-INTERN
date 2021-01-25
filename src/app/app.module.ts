import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NewEmployeeComponent,
    ListEmployeesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
