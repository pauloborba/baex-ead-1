import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import { Student } from '../../model/student';
import { Course } from '../../model/course';
import * as request from 'request-promise';
const chaiAsP = require('chai-as-promised');
const chai = require('chai');
chai.use(chaiAsP);
const expect = chai.expect;
var studentG;

defineSupportCode(function ({ Given, When, Then }) {
  Given(/^I'm logged in as a student named "([^\"]*)" and with CPF "(\d*)"$/, async (name, cpf) => {
        const student: Student = new Student(name, cpf, 'example@mail.com', 'password');
        studentG = student;
        return request.post({
        url: 'http://localhost:3000/student',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }).then(response => expect(Promise.resolve(response.success)).to.equal(true));
    })
  Given(/^I'm at the "available-courses" page$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Baex');
        await $("a[name='cursos']").click();
    })
  Given(/^I can see the course "([^\"]*)"$/, async (courseName) => {
        var availableCourses : ElementArrayFinder = element.all(by.name('courseList'));
        await availableCourses;
        var selectedCourse = availableCourses.filter(elem =>
                                      elem.getText().then(text => text === courseName));
        await selectedCourse;
        await selectedCourse.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
  Given(/^I haven't bought the course "([^\"]*)"$/, async (courseName) => {
        var studentCourses : ElementArrayFinder = studentG.courses;
        var actualCourse = studentCourses.filter(elem =>
                                      elem.getText().then(text => text === courseName));
        await actualCourse;
        await actualCourse.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
      });
  When(/^I request to buy the course "([^\"]*)"$/, async (courseName) => {
        await $(`button[name='${courseName}']`).click();
        await $(`button[name='buyButton']`).click();
      });
  Then(/^I will receive a message confirming that the request has been sent$/, async () => {
        await expect(element(by.id('requestSent')).isDisplayed()).toBeTrue();
      });
});
