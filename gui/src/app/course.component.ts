import { Component, OnInit } from '@angular/core';

import { Course } from '../../../model/course';
import { Module } from '../../../model/module';
import { CourseService } from './course.service';

@Component({
  selector: 'course-manager',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

	course: Course = new Course();
  module: Module = new Module();
	courses: Course[] = [];
  updatingList: Boolean = false;
   
   constructor(private courseService: CourseService) {
   	this.courseService = courseService;
   }

   createCourse(course : Course) : void {
   	this.courseService.create(course)
   		.then(insertedCourse => {
   			
   				this.reset();
           this.updateCourses();


   			
   		})
   		.catch(error=>{
         console.error(error);
   			//Handle error
   		});
   };

   registerModule(module : Module): void {
     this.course.modules.push(module);
     this.module = new Module();

   }

   updateCourses(): void{
     this.updatingList = true;
     this.courseService.getAll()
         .then(courses => {
           this.courses = courses;
           this.updatingList = false;
         })
         .catch(error => {
           //Handle error
         });
   }
   

   reset(): void {
   	this.course = new Course();
    this.module = new Module();
   }

   onMove(): void {
      // this.cpfduplicado = false;
   }

   ngOnInit(): void {
     this.courseService.getAll()
         .then(courses => {
         	this.courses = courses;
         })
         .catch(error => {
         	//Handle error
         });
   }

}
