import { defineSupportCode } from 'cucumber';
import { browser, $, element, by } from 'protractor';
import { Student } from '../../model/student';
import { Course } from '../../model/course';
import { Class } from '../../model/class';
import { Module } from '../../model/module';
import * as request from 'request-promise';
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

const url = 'http://localhost:3000';
const frontUrl = 'http://localhost:4200';

async function createStudent(name: string, cpf: string, email: string, password: string): Promise<boolean> {
    const student: Student = new Student(name, cpf, email, password);
    return request.post({
        url: `${url}/student`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then(response => expect(JSON.parse(response).success).to.equal(true));
}

async function createCourse(name: string, price: number, description: string): Promise<boolean> {
    const course: Course = new Course(name, price, description);
    return request.post({
        url: `${url}/course`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    })
    .then(response => expect(JSON.parse(response).success).to.equal(true));
}

async function createClass(name: string, courseName: string, beginDate: Date, endDate: Date): Promise<boolean> {
    const courseClass: Class = new Class(name, courseName, beginDate, endDate);
    return request.post({
        url: `${url}/class`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(courseClass)
    })
    .then(response => expect(JSON.parse(response).success).to.equal(true));
}

async function enrollStudent(name: string, className: string, courseName: string): Promise<boolean> {
    const options = {
        by: 'name',
        student: name,
        class: className,
    };

    return request.put({
        url: `${url}/enroll`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
    })
    .then(response => expect(JSON.parse(response).success).to.equal(true));
}

async function confirmPayment(name: string, courseName: string): Promise<boolean> {
    const options = {
        by: 'name',
        student: name,
        course: courseName
    };

    return request.put({
        url: `${url}/confirmPayment`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
    })
    .then(response => expect(JSON.parse(response).success).to.equal(true));
}

async function createModule(name: string, description: string, releaseDate: Date, courseName: string): Promise<boolean> {
    const options = {
        module: new Module(name, description, releaseDate),
        course: courseName
    };

    return request.post({
        url: `${url}/createModule`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(options)
    })
    .then(response => expect(JSON.parse(response).success).to.equal(true));
}

let server = require('../../server/service');

defineSupportCode(({Given, When, Then, After, Before}) => {
    
    Before(() => {
        server.resetServer();
    });
    
    Given(/^a student named "(.*)" with cpf "(\d\d\d.\d\d\d.\d\d\d-\d\d)"$/, async (name: string, cpf: string) => {
        await createStudent(name, cpf, `${name}@test.com`, 'testPassword');
    });
    
    Given(/^a class named "(.*)" from a course named "(.*)"$/, async (className: string, courseName: string) => {
        await createCourse(courseName, 0.00, 'testCourse');
        const begin = new Date();
        const end = new Date();
        end.setFullYear(begin.getFullYear() + 1);
        await createClass(className, courseName, begin, end);
    });
    
    Given(/^"(.*)" is enrolled in the "(.*)" class of the "(.*)" course$/, async (name: string, className: string, courseName: string) => {
        await enrollStudent(name, className, courseName);
    });
    
    Given(/^"(.*)" is in day with his payment of the "(.*)" course$/, async (name: string, courseName: string) => {
        await confirmPayment(name, courseName);
    });

    Given(/^"(.*)" is not in day with his payment of the "(.*)" course$/, async (name: string, courseName: string) => {
    });

    Given(/^the module "(.*)" of the "(.*)" course was set to be available "(\d*)" days ago$/, async (moduleName: string, courseName: string, daysAgo: string) => {
        const releaseDate = new Date(new Date().setDate(new Date().getDate() - Number(daysAgo))); //today - daysAgo
        await createModule(moduleName, 'testModule', releaseDate, courseName);
    });

    Given(/^the module "(.*)" of the "(.*)" course is set to be available "(\d*)" days from now$/, async (moduleName: string, courseName: string, daysFromNow: string) => {
        const releaseDate = new Date(new Date().setDate(new Date().getDate() + Number(daysFromNow))); //today - daysAgo
        await createModule(moduleName, 'testModule', releaseDate, courseName);
    });

    When(/^"(.*)" with cpf "(\d\d\d.\d\d\d.\d\d\d-\d\d)" tries to see the module "(.*)" of the "(.*)" course$/, async (name: string, cpf: string, moduleName: string, courseName: string) => {
        await browser.get(`${frontUrl}`);
        await $('#name').sendKeys(name);
        await $('#cpf').sendKeys(cpf);
        await $('#email').sendKeys(`${name}@test.com`);
        await $('#password').sendKeys(`testPassword`);
        await $('#signIn').click();
        await $('#myCourses').click();
        await element(by.buttonText(courseName)).click();
        await element(by.buttonText(moduleName)).click();
    });

    Then(/^"(.*)" is redirected to the "(.*)" module page from the "(.*)" course$/, async (name, moduleName, courseName) => {
        await expect($('#courseName').getText()).to.eventually.equal(courseName);
        await expect($('#moduleName').getText()).to.eventually.equal(moduleName);
    });

    Then(/^"(.*)" can see an error message$/, async (name) => {
        await expect($('#error').getText()).to.eventually.equal('not avaliable yet');
    });
    
    Then(/^"(.*)" can see an warning$/, async (name) => {
        await expect($('#error').getText()).to.eventually.equal('not in day with your payments');
    });

    
});