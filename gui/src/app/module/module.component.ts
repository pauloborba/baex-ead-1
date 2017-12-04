import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Course } from "../../../../model/course";
import { Module } from "../../../../model/module";

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  module: Module;
  course: Course;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      this.course = JSON.parse(params['course']);
      this.module = JSON.parse(params['module']);
    });
  }

}
