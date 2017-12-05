import { Student } from '../gui/src/app/student';
import { StudentRegistering } from './studentRegistering';
import express = require('express');
import bodyParser = require('body-parser');

var app = express();

var studentReg: StudentRegistering = new StudentRegistering();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/student', (req, res) => {
    res.send(JSON.stringify(studentReg.getStudents()));
});

app.post('/student', function (req: express.Request, res: express.Response) {
    var student: Student = <Student> req.body;
    student = studentReg.register(student);
    if (student) {
        res.send("success");
        console.log(studentReg.students);
    } else {
        res.send("failure");
    }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
