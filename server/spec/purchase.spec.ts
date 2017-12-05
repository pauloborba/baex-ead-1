import { Purchase } from '../purchase';
import { Student } from '../../model/student';
import { Course } from '../../model/course';
import { Class } from '../../model/class';
import { Module } from '../../model/module';

describe('the purchase', () => {
  let purchase: Purchase;

  beforeAll(() => purchase = new Purchase());
  afterAll(() => purchase = new Purchase());

  it('is initially empty', () => {
    const investments: Course = new Course('Investimentos', 200.00, 'Curso de Investimentos');
    expect(purchase.getRequests(investments).length).toEqual(0);
  });

  it('registers a request correctly', () => {
    const student: Student = new Student('Sergio', '11194924409', 'sttf@cin.ufpe.br', '123');
    const course: Course = new Course('Gerência', 100.00, 'Curso de Gerência');
    purchase.registerRequest(student, course);
    expect(purchase.getRequests(course)[0].cpf).toEqual(student.cpf);
  });
});
