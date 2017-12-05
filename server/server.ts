import * as express from "express";
import * as bodyParser from "body-parser";

import {Course} from '../model/course';

import {CourseRepository} from './repositories/course';

var app = express();

var courseRep: CourseRepository = new CourseRepository();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/course', function (req, res) {
  res.send(JSON.stringify(courseRep.getAll()));
})

app.post('/course', function (req: express.Request, res: express.Response) {
  var course: Course = <Course> req.body;
  let status: String;

  course = courseRep.insert(course);
  if (course) {
    status = "success";
  } else {
    status = "failure";
  }
  res.send({"status": status});
})


var server = app.listen(3000, function () {
  console.log('Server running on port 3000')
})

function closeServer(): void {
   server.close();
}

export { app, server, closeServer }
