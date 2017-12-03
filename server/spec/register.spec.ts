import { Register } from '../register';
import { Student } from '../../model/student';
import { Course } from '../../model/course';
import { Class } from '../../model/class';
import { Module } from '../../model/module';

describe('O Cadastro', () => {
    let cadastro: Register;

    beforeAll(() => cadastro = new Register());
    afterAll(() => cadastro = new Register());

    it('is initially empty', () => {
        expect(cadastro.getStudents().length).toEqual(0);
        expect(cadastro.getCourses().length).toEqual(0);
        expect(cadastro.getClasses().length).toEqual(0);
    })

    it('register Students correctly', () => {
        const student: Student = new Student('studentName', '000.000.000-00', 'test@test.com', 'password');
        cadastro.registerStudent(student);
        const studentGet = cadastro.getStudents()[0];
        for(let field in student) {
            expect(student[field]).toEqual(studentGet[field]);
        }
    });

    it('register Courses correctly', () => {
        const course: Course = new Course('courseName', 0.00, 'courseDescription');
        cadastro.registerCourse(course);
        const courseGet = cadastro.getCourses()[0];
        for(let field in course) {
            expect(course[field]).toEqual(courseGet[field]);
        }
    });

    it('register Classes correctly', () => {
        const classe: Class = new Class('className', 'courseName', new Date(), new Date());
        cadastro.registerClass(classe);
        const classGet = cadastro.getClasses()[0];
        for(let field in classe) {
            expect(classe[field]).toEqual(classGet[field]);
        }
    });

    it('register Modules correctly', () => {
        const modulee: Module = new Module('moduleName', 'description', new Date());
        cadastro.registerModule(modulee, 'courseName');
        const moduleGet = cadastro.getModules('courseName')[0];
        for(let field in modulee) {
            expect(modulee[field]).toEqual(moduleGet[field]);
        }
    });

});