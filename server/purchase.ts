import{ Student } from '../model/student';
import { Course } from '../model/course';
import { Class } from '../model/class';

export class Purchase {
  registerRequest(student: Student, course: Course): Student{ return null }
  getRequests(course: Course): Array<Student> { return null }
}
