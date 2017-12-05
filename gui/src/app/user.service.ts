import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Student } from '../../../model/student';
import { Course } from '../../../model/course';

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:3000';
  private student = null;

  constructor(private http: Http) { }

  signUp(student: Student): Promise<Student> {
    return this.http.post(`${this.url}/student`, JSON.stringify(student), {headers: this.headers})
    .toPromise()
    .then(response => {
      return response.json().success ? student : null;
    });
  }

  signIn(student: Student): Promise<Student> {
    return this.http.get(`${this.url}/student`)
    .toPromise()
    .then(response => {
      const search = response.json().filter(el => {
        return el.name === student.name &&
          el.cpf === student.cpf &&
          el.email === student.email &&
          el.password === student.password;
      });
      this.student = search.length === 1 ? search[0] : null;
      return this.student;
    });
  }

  getCourses(): Promise<Course[]> {
    return this.http.get(`${this.url}/class`)
    .toPromise()
    .then(response => {
      let searchClass = response.json().filter(el => {
        let innerSearch = this.student.classes.indexOf(el.name);
        return innerSearch !== -1;
      });
      searchClass = searchClass.map(el => el.courseName);
      return this.http.get(`${this.url}/course`)
      .toPromise()
      .then(response2 => {
        let searchCourse = response2.json();
        let search = searchClass.map(el => {
          for (let i in searchCourse) {
            if (el === searchCourse[i].name) {
              return searchCourse[i];
            }
          }
        });
        return search;
      });
    });
  }

  getStudent(): Student {
    
    return this.student;
  }

  clear(): void {
    this.student = null;
  }
}
new Array().find