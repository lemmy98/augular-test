import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  data:any;
  // public authForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router) {  }

  ngOnInit(): void {
  }

  authForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password:['',[Validators.required]]
  })

  login(email:string,password:string){
    if(email === 'admin@yahoo.com' && password === 'Adminpass'){
      return this.router.navigateByUrl('employee-details')
    }
    else {
      alert('Email or password is incorrect')
      return false
    }
    console.log(this.authForm.value);
    
  }

}