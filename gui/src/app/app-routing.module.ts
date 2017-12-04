import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { OwnedCourseComponent } from './owned-course/owned-course.component';
import { ModuleComponent } from './module/module.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'myCourse/:course',
    component: OwnedCourseComponent
  },
  {
    path: 'myCourses',
    component: MyCoursesComponent
  },
  {
    path: 'myModule/:course/:module',
    component: ModuleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
