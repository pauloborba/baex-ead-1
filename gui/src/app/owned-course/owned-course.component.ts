import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

import { Course } from "../../../../model/course";
import { Module } from "../../../../model/module";

@Component({
  selector: 'app-owned-course',
  templateUrl: './owned-course.component.html',
  styleUrls: ['./owned-course.component.css']
})
export class OwnedCourseComponent implements OnInit {
  
  course: Course;
  message: string;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      this.course = JSON.parse(params['course']);
    });
  }

  redirectTo(modulee: Module) {
    let released = new Date(modulee.releaseDate);
    let today = new Date();
    let inDay = this.userService.getStudent().inDay[this.course.name];
    if (inDay === true && today.getTime() >= released.getTime()) {
      this.router.navigate(['myModule', JSON.stringify(this.course), JSON.stringify(modulee)]);
    } else if (!inDay) {
      this.message = 'not in day with your payments';
    } else {
      this.message = 'not avaliable yet';
    }
  }

}
