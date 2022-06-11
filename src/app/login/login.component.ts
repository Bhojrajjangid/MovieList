import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userLoginForm: FormGroup;
  submitted: boolean = false;
  loginFail = false;

  constructor(public formBuilder: FormBuilder, public loginService:LoginService,
    public router: Router) {
    this.userLoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    console.log('local storage ',localStorage.getItem('userToken'))
  }

  ngOnInit(): void {
  }
  get f()
  {
      return this.userLoginForm.controls;
  }
  goToLogin(formValue:FormGroup): void{
    this.loginService.getLoginDetails(formValue.value).subscribe((loginData:any)=>{
      this.loginFail = false;
      console.log('Login response',loginData)
      if(loginData.is_success){
        localStorage.setItem('userToken',loginData.data.token);
        console.log('User Login page token: ',localStorage.getItem('userToken'))
        this.router.navigate(['/movies']);
      }
    } ,
    (error) => {
        console.log(error.error);
        this.loginFail = true;
    });
    
  }
}
