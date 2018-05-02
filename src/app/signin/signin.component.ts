import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userList: User[]=[];

  form: FormGroup;

  addUser(form) { 
    console.log(form.value);
    this.router.navigate(['/exit']);
  }
  
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
   this.form = new FormGroup({

   
    contact: new FormControl('', [Validators.required]),
  

   });
   
  }
   
  

 
 

}
