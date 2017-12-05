import { Course } from '../../model/course';

export class CourseRepository {
  courses: Course[] = [];

  insert(course: Course): Course {
  	for (var i = 0; i < this.courses.length; ++i) {
  		if (course.name === this.courses[i].name) {
  			return null;
  		}
  	}
  	
    this.courses.push(course);
    return course;
  }

  getAll(): Course[] {
    return this.courses;
  }
}
