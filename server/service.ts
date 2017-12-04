import * as express from 'express';
import * as bodyParser from "body-parser";
import { Register } from './register';
import { Student } from '../model/student';
import { Course } from '../model/course';
import { Class } from '../model/class';
import { Module } from '../model/module';

const app = express();

const register: Register = new Register();

const allowCrossDomain = function (req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/student', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(register.getStudents()));
});

app.post('/student', (req: express.Request, res: express.Response) => {
    let student: Student = <Student> req.body;
    student = register.registerStudent(student);
    res.send(JSON.stringify({ success: (student ? true : false) }));
});

app.get('/course', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(register.getCourses()));
});

app.post('/course', (req: express.Request, res: express.Response) => {
    let course: Course = <Course> req.body;
    course = register.registerCourse(course);
    res.send(JSON.stringify({ success: (course ? true : false) }));
});

app.get('/class', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(register.getClasses()));
});

app.post('/class', (req: express.Request, res: express.Response) => {
    let classe: Class = <Class> req.body;
    classe = register.registerClass(classe);
    res.send(JSON.stringify({ success: (classe ? true : false) }));
});

app.post('/createModule', (req: express.Request, res: express.Response) => {
    let options = req.body;
    options = register.registerModule(<Module>options.module, <string>options.course);
    res.send(JSON.stringify({ success: (options ? true : false) }));
});

app.put('/enroll', (req: express.Request, res: express.Response) => {
    let options = req.body;
    if (options.by && options.by === 'name') {
        options = register.enrollStudentByName(options.student, options.class);
    }
    res.send(JSON.stringify({ success: (options ? true : false)}));
});

app.put('/confirmPayment', (req: express.Request, res: express.Response) => {
    let options = req.body;
    if (options.by && options.by === 'name') {
        options = register.confirmPaymentByName(options.student, options.course);
    }
    res.send(JSON.stringify({ success: (options ? true : false)}));
});

const server = app.listen(3000, function () {
    console.log('\nListening on port 3000!\n')
});

function closeServer(): void {
    server.close();
}

export { app, server, closeServer }