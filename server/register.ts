import { Student } from '../model/student';
import { Course } from '../model/course';
import { Class } from '../model/class';
import { Module } from '../model/module';

export class Register {
    registerStudent(student: Student): Student{ return null }
    getStudents(): Array<Student> { return null }
    registerCourse(course: Course): Course{ return null }
    getCourses(): Array<Course> { return null }
    registerClass(classe: Class): Class { return null }
    getClasses(): Array<Class> { return null }
    registerModule(Module: Module, courseName: string): Module { return null }
    getModules(courseName: string): Array<Module> { return null }
}