import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by, ExpectedConditions } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {
	Given(/^I am at the course-register page$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('BAEX-EAD');
        await $("a[name='moderator']").click();
        await expect(browser.getTitle()).to.eventually.equal('Moderador');
        await $("a[name='course-registering']").click();
    })

    Given(/^I cannot see a course with the name "([^\"]*)"$/, async (course) => {
    	var courselist : ElementArrayFinder = element.all(by.name('namelist'));
    	await courselist;
    	var samecourse = courselist.filter(elem => elem.getText().then(text => text === course));
    	await samecourse;
    	await samecourse.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    })

    When(/^I try to register a new course with the name "([^\"]*)" with price "(\d*)"$/, async (course, price) => {
        await $("input[name='namebox']").sendKeys(<string> course);
        await $("input[name='pricebox']").sendKeys(<string> price);
        await element(by.buttonText('Adicionar Curso')).click();
    });

    Then(/^I can see a course with the name "([^\"]*)" in the courses list$/, async (course) => {
        browser.wait(ExpectedConditions.elementToBeClickable(element(by.buttonText('Adicionar Curso'))), 3000);
    	var courselist : ElementArrayFinder = element.all(by.name('namelist'));
    	await courselist;
    	var samecourse = courselist.filter(elem => elem.getText().then(text => text === course));
    	await samecourse;
    	await samecourse.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    

     
})


defineSupportCode(function ({ Given, When, Then }) {

  Given(/^I can see a course with the name "([^\"]*)" with price "([^\"]*)" already registered$/, async (course, price) => {
       await $("input[name='namebox']").sendKeys(<string> course);
      await $("input[name='pricebox']").sendKeys(<string> price);
      await element(by.buttonText('Adicionar Curso')).click();
      browser.wait(ExpectedConditions.elementToBeClickable(element(by.buttonText('Adicionar Curso'))), 3000).then(async () => {
          var courselist : ElementArrayFinder = element.all(by.name('course-name'));
          await courselist;
          var samecourse = courselist.filter(elem => elem.getText().then(text => text === course));
          await samecourse;
          await samecourse.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));    
      });
      
    });

  When(/^I try to register a new course named "([^\"]*)" with price "(\d*)"$/, async (course, price) => {
        await $("input[name='namebox']").sendKeys(<string> name);
        await $("input[name='pricebox']").sendKeys(<string> price);
        await element(by.buttonText('Adicionar Curso')).click();
    });

  Then(/^The new course with the name "([^\"]*)" will not be registered$/, async (course) => {
        browser.wait(ExpectedConditions.elementToBeClickable(element(by.buttonText('Adicionar Curso'))), 3000);
        var courselist : ElementArrayFinder = element.all(by.name('course-name'));
        await courselist;
        var samecourse = courselist.filter(elem => elem.getText().then(text => text === course));
        await samecourse;
        await samecourse.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));    
  });
})