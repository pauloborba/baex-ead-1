import { Course } from '../../model/course';

export class CourseRepository {
  courses: Course[] = [];

  insert(course: Course): Course {
    this.courses.push(course);
    return course;
  }

  getAll(): Course[] {
    return this.courses;
  }
}
