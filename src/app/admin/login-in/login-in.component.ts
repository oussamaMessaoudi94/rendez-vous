import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {
loginForm!:FormGroup
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }


  login(){
    if (this.loginForm.value.email == 'oussamamessaoudi94@gmail.com' && this.loginForm.value.password == '123456') {
      this.router.navigate(["acceuil"])
    } else {
      alert('no oussama')
    }
    }
}
