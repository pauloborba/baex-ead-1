import { Student } from '../model/student';
import { Course } from '../model/course';
import { Class } from '../model/class';
import { Module } from '../model/module';

export class Register {

    students: Array<Student>;
    courses: Array<Course>;
    classes: Array<Class>;

    constructor() {
        this.students = new Array<Student>();
        this.courses = new Array<Course>();
        this.classes = new Array<Class>();
    }

    registerStudent(student: Student): Student {
        const search = this.students.filter(el => el.email === student.email || el.cpf === student.cpf);
        if (search.length === 0) {
            this.students.push(student);
            return student;
        }
        return null;
    }

    getStudents(): Array<Student> {
        return this.students;
    }

    registerCourse(course: Course): Course {
        const search = this.courses.filter(el => el.name === course.name);
        if (search.length === 0) {
            this.courses.push(course);
            return course;
        }
        return null;
    }

    getCourses(): Array<Course> {
        return this.courses;
    }

    registerClass(classe: Class): Class {
        const search = this.classes.filter(el => el.name === classe.name);
        const searchCourse = this.courses.filter(el => el.name === classe.courseName);
        if (search.length === 0 && searchCourse.length === 1) {
            this.classes.push(classe);
            return classe;
        }
        return null;
    }

    getClasses(): Array<Class> {
        return this.classes;
    }

    registerModule(modulee: Module, courseName: string): Module {
        const searchCourse = this.courses.filter(el => el.name === courseName);
        if (searchCourse.length === 1) {
            const search = searchCourse[0].modules.filter(el => el.name === modulee.name);
            if (search.length === 0) {
                searchCourse[0].modules.push(modulee);
                return modulee;
            }
        }
        return null;
    }

    getModules(courseName: string): Array<Module> {
        const searchCourse = this.courses.filter(el => el.name === courseName);
        if (searchCourse.length === 1) {
            return searchCourse[0].modules;
        }
        return null;
    }

    enrollStudentByName(student: string, classe: string) {
        const existentClasses = this.classes.filter(el => el.name === classe);
        if (existentClasses.length === 1) {
            for (let i in this.students) {
                if (this.students[i].name === student) {
                    this.students[i].classes.push(classe);
                    this.students[i].inDay[existentClasses[0].courseName] = false;
                    return this.students[i];
                }
            }
        }
        return null;
    }
    
    confirmPaymentByName(student: string, course: string, confirmation?: string) {
        const existentCourses = this.courses.filter(el => el.name === course);
        if(existentCourses.length === 1) {
            for (let i in this.students) {
                if (this.students[i].name === student && this.students[i].inDay[course] !== undefined) {
                    this.students[i].inDay[course] = true;
                    return this.students[i];
                }
            }
        }
        return null;     
    }
}