Feature: Course Registering
	As a moderator
	I want to register courses
	So that I could sell them to my clients



Scenario: Successful course registering
Given I am at the course-register page
And I cannot see a course with the name "Finanças"
When I try to register a new course with the name "Finanças" with price "100"
Then I can see a course with the name "Finanças" in the courses list

@seed
Scenario: Duplicate course error
Given I am at the course-register page
And I can see a course with the name "Vendas" with price "100" already registered
When I try to register a new course with the name "Vendas" with price "100"
Then The new course with the name "Vendas" will not be registered 

Scenario: Successful multi module course registering
Given I am at the course-register page
And There is no course with the name "Finanças"
When I try to register a course with the name "Finanças" with price "100"
And the course module "Introdução"
And the course module "Aprofundamento"
Then The course with the name "Finanças" will be successfully registered
And I can see the module "Introdução"
And I can also see the module "Aprofundamento"

Scenario: Invalid price error
Given I am at the course-register page
When I try to register a new course with the name "Marketing"
And the price "-99"
Then The new course with the name "Marketing" won’t be registered 