import { AuthService } from '../../services/auth.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean;
  loginForm:FormGroup;

  constructor(private _auth: AuthService, private router:Router) {
  }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  onLogin(){
    this.loading=true;
    const {username, password}= this.loginForm.value;
    this._auth.login(username,password).subscribe((response)=>{
      this.router.navigate(['/post'])
      console.log(username, password)
    },
    (error) => {
      this.loading = false;
    })
  }

  
}
