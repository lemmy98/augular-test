import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  allEmployees: any = [];

  constructor(private dataService: DataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.employeeDetails()
  }

  employeeDetails() {
    this.dataService.getEmployees().subscribe(res => {
      this.allEmployees = res;
      console.log(this.allEmployees);
      
    })
  }

  deleteEmployee(id:any) {
    this.dataService.deleteEmployee(id).subscribe(() => {
      this.employeeDetails();
    })
  }

}
