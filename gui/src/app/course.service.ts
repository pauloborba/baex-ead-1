import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Course } from '../../../model/course';

@Injectable()
export class CourseService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private baseURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  create(course: Course): Promise<Course> {
    return this.http.post(this.baseURL + "/course",JSON.stringify(course), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return course;} else {return null;}
           })
           .catch(this.handleException);
  }

  update(course: Course): Promise<Course> {
    return this.http.put(this.baseURL + "/course",JSON.stringify(course), {headers: this.headers})
         .toPromise()
         .then(res => {
            if (res.json().success) {return course;} else {return null;}
         })
         .catch(this.handleException);
  }

  getAll(): Promise<Course[]> {
    return this.http.get(this.baseURL + "/course")
             .toPromise()
             .then(res => res.json() as Course[])
             .catch(this.handleException);
  }

  private handleException(error: any): Promise<any>{
    console.error('Aconteceu um erro no acesso aos cursos',error);
    return Promise.reject(error.message || error);  
  }
}
