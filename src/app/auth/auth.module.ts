import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }


    