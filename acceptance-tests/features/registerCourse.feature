Feature: Course registration
  As a moderator
  I want to register courses
  So that I could sell them to my clients

Scenario: Successful course registering
Given I'm at the course-register page
And There’s no course with the name “Finanças”
When I try to register a new course with the name “Finanças”
Then The course with the name “Finanças” will be successfully registered
And I can see a confirmation message

Scenario: Duplicate course error
Given I’m at the course-register page
And There’s a course with the name “Vendas” already registered
When I try to register a new course with the name “Vendas”
Then The new course with the name “Vendas” won’t be registered
And I can see a error message saying that the course “Vendas” already exists

Scenario: Invalid price error
Given I’m at the course-register page
When I try to register a new course with the name “Marketing” and the price “-99”
Then The new course with the name “Marketing” won’t be registered
And I can see a error message saying that the price for “Marketing” isn’t valid
