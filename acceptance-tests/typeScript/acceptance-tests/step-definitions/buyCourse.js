"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const student_1 = require("../../model/student");
const request = require("request-promise");
const chaiAsP = require('chai-as-promised');
const chai = require('chai');
chai.use(chaiAsP);
const expect = chai.expect;
var studentG;
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I'm logged in as a student named "([^\"]*)" and with CPF "(\d*)"$/, (name, cpf) => __awaiter(this, void 0, void 0, function* () {
        const student = new student_1.Student(name, cpf, 'example@mail.com', 'password');
        studentG = student;
        return request.post({
            url: 'http://localhost:3000/student',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        }).then(response => expect(Promise.resolve(response.success)).to.equal(true));
    }));
    Given(/^I'm at the "available-courses" page$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('Baex');
        yield protractor_1.$("a[name='cursos']").click();
    }));
    Given(/^I can see the course "([^\"]*)"$/, (courseName) => __awaiter(this, void 0, void 0, function* () {
        var availableCourses = protractor_1.element.all(protractor_1.by.name('courseList'));
        yield availableCourses;
        var selectedCourse = availableCourses.filter(elem => elem.getText().then(text => text === courseName));
        yield selectedCourse;
        yield selectedCourse.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    }));
    Given(/^I haven't bought the course "([^\"]*)"$/, (courseName) => __awaiter(this, void 0, void 0, function* () {
        var studentCourses = studentG.courses;
        var actualCourse = studentCourses.filter(elem => elem.getText().then(text => text === courseName));
        yield actualCourse;
        yield actualCourse.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    }));
    When(/^I request to buy the course "([^\"]*)"$/, (courseName) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$(`button[name='${courseName}']`).click();
        yield protractor_1.$(`button[name='buyButton']`).click();
    }));
    Then(/^I will receive a message confirming that the request has been sent$/, () => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.element(protractor_1.by.id('requestSent')).isDisplayed()).toBeTrue();
    }));
});
