import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function({Given, When, Then}){

    Given(/^There’s no student with e-mail “(.*)” registered$/, async (email) => {
        await browser.get("http://localhost:4200/lista-de-alunos");
        var studentsEmails : ElementArrayFinder = element.all(by.name('studentsEmailsList'));
        await studentsEmails;
        var sameEmails = studentsEmails.filter(elem => elem.getText().then(text => text === email));
        await sameEmails;
        await sameEmails.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });

    Given(/^I’m at the registering page$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('baex-ead');
        await $("a[name='register-student']").click();
    });

    When(/^I try to register a student with e-mail “(.*)” and password “(.*)”$/, async (email, password) => {
        await $("input[name='emailBox']").sendKeys(<string> email);
        await $("input[name='passwordBox']").sendKeys(<string> password);
        await element(by.buttonText('Cadastrar')).click();
    });

    Then(/^I can see a confirmation message$/, async () => {
        await expect(element(by.name('status')).getText()).to.eventually.equal('aluno cadastrado com sucesso');
    });
});
