import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup
  constructor(private auth: AuthService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required )
    })
      
 

  }

  submit(form:FormGroup) {
 
    let body= {
      username: form.value.username,
      password: form.value.password
    }

    console.log(body)
    this.auth.logIn(body).subscribe(res => {
      console.log(res)
    },(err) => {
      console.log(err)
  
    })
  }

}
