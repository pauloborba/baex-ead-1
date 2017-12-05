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
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^There’s no student with e-mail “(.*)” registered$/, (email) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/lista-de-alunos");
        var studentsEmails = protractor_1.element.all(protractor_1.by.name('studentsEmailsList'));
        yield studentsEmails;
        var sameEmails = studentsEmails.filter(elem => elem.getText().then(text => text === email));
        yield sameEmails;
        yield sameEmails.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    }));
    Given(/^I’m at the registering page$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://localhost:4200/");
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal('baex-ead');
        yield protractor_1.$("a[name='register-student']").click();
    }));
    When(/^I try to register a student with e-mail “(.*)” and password “(.*)”$/, (email, password) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='emailBox']").sendKeys(email);
        yield protractor_1.$("input[name='passwordBox']").sendKeys(password);
        yield protractor_1.element(protractor_1.by.buttonText('Cadastrar')).click();
    }));
    Then(/^I can see a confirmation message$/, () => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.element(protractor_1.by.name('status')).getText()).to.eventually.equal('aluno cadastrado com sucesso');
    }));
});
