import { Component, OnInit } from '@angular/core';
import {register_data } from './user-register.interface'
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
   styleUrls:['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user:register_data;
  constructor() { 
  this.user ={   
    fname:"",
    lname:"",
    email:"",
    mobile:undefined,
    aadhar:"",
    pan:"",
    gender:"",
    dob:null,
    address:""}
  }

  ngOnInit() {

  }

}
