import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';

import { UserService } from "./user.service";
import { MainComponent } from './main/main.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { OwnedCourseComponent } from './owned-course/owned-course.component';
import { ModuleComponent } from './module/module.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MyCoursesComponent,
    OwnedCourseComponent,
    ModuleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      }
    ]),
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
