import * as request from 'request-promise';
import {} from 'jasmine';
import { Course } from '../../model/course';
import { Student } from '../../model/student';
var base_url = 'http://localhost:3000/';

describe('the server', () => {
  let server: any;

  beforeAll(() => server = require('../service'));
  afterAll(() => server.closeServer());
  it('receives purchase requests', () => {
        const student: Student = new Student('Sergio', '11194924409', 'sttf@cin.ufpe.br', 'pw123');
        const course: Course = new Course('Gerência', 100.00, 'curso de gerência');
        course.purchaseRequest.push(student);
        return request.post({
            url: `${base_url}/course`,
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
        .then(response => {
            expect(JSON.parse(response).success).toEqual(true);
            return request.get({
                url: `${base_url}/course`,
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response1 => {
                expect(JSON.parse(response1).filter((res: Course) => {
                    return res.purchaseRequest[0].cpf === '11194924409';
                }).length).toEqual(1);
            });
        });
    });
});
