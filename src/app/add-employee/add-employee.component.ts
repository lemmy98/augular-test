import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: any = [];

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployeeForm = this.fb.group({
    name: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required, Validators.email]),
    age: new FormControl ('', [Validators.required]),
    gender: new FormControl ('', [Validators.required]),
    role: new FormControl ('', [Validators.required]),
    date_joined: new FormControl ('', [Validators.required]),
  })

  addEmployee(data:any) {
    if (this.addEmployeeForm.valid){
      this.dataService.addEmployee(data).subscribe(res => {
        console.log(res)
      })
      return this.router.navigateByUrl('/employee-details')
    }else {
      alert('Fill in all required fields')
      return false;
    }
    
    
  }
}