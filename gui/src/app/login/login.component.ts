import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../user.service";

import { Student } from "../../../../model/student";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  student: Student;
  message: string;

  constructor(private userService: UserService, private router: Router) {
    this.student = new Student('', '', '', '');
  }

  onSignIn() {
    this.userService.signIn(this.student)
    .then(response => {
      if (response) {
        this.router.navigate(['main']);
      } else {
        this.message = 'invalid'
      }
    });
  }
  
  onSignUp() {
    this.userService.signUp(this.student)
    .then(response => {
      if (response) {
        this.message = 'signed up'
      } else {
        this.message = 'invalid';
      }
    });
  }

  ngOnInit() {
    this.userService.clear();
  }

}
