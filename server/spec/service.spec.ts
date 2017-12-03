import * as request from 'request-promise';
import { Student } from '../../model/student';
import { Course } from '../../model/course';
import { Class } from '../../model/class';
import { Module } from '../../model/module';

const url = 'http://localhost:3000'

describe('The server', () => {
    let server: any;

    beforeAll(() => server = require('../service'));
    afterAll(() => server.closeServer());

    it('register students correctly', () => {
        const student: Student = new Student('studentName', '000.000.000-00', 'email@email.com', 'password');
        return request.post({
            url: `${url}/student`,
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        .then(response => {
            expect(JSON.parse(response).success).toEqual(true);
            return request.get({
                url: `${url}/student`,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response2 => {
                expect(JSON.parse(response2).filter((el: Student) => {
                    return el.name === 'studentName' && el.cpf === '000.000.000-00' && el.email === 'email@email.com' && el.password === 'password';
                }).length).toEqual(1);
            });
        });
    });

    it('register courses correctly', () => {
        const course: Course = new Course('courseName', 0.00, 'description');
        return request.post({
            url: `${url}/course`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
        .then(response => {
            expect(JSON.parse(response).success).toEqual(true);
            return request.get({
                url: `${url}/course`,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response2 => {
                expect(JSON.parse(response2).filter((el: Course) => {
                    return el.name === 'courseName' && el.price === 0.00 && el.description === 'description';
                }).length).toEqual(1);
            });
        });
    });

    it('register classes correctly', () => {
        var s: any = new Date();
        const classe: Class = new Class('className', 'courseName', s, s);
        return request.post({
            url: `${url}/class`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(classe)
        })
        .then(response => {
            expect(JSON.parse(response).success).toEqual(true);
            return request.get({
                url: `${url}/class`,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response2 => {
                s = JSON.stringify(s);
                expect(JSON.parse(response2).filter((el: Class) => {
                    return el.name === 'className' && el.courseName === 'courseName' && JSON.stringify(el.beginDate) === s && JSON.stringify(el.endDate) === s;
                }).length).toEqual(1);
            });
        });
    });
    
    it('register modules correctly', () => {
        var s = new Date();
        const options = {
            module: new Module('moduleName', 'description', s),
            course: 'courseName'
        };
        return request.post({
            url: `${url}/createModule`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(options)
        })
        .then(response => {
            return request.get({
                url: `${url}/course`,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response2 => {
                expect(JSON.parse(response2).filter((el: Course) => {
                    return el.name === 'courseName' && el.price === 0.00 && el.description === 'description';
                })[0].modules.length).toEqual(1);
            });
        });
    });
});