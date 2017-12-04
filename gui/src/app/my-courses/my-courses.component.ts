import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Course } from "../../../../model/course";

import { UserService } from "../user.service";

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})

export class MyCoursesComponent implements OnInit {

  courses: Course[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getCourses()
    .then(response => this.courses = response);
  }

  redirectTo(course: string): void {
    this.router.navigate(['myCourse', JSON.stringify(course)]);
  }

}
