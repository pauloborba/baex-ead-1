Feature: Course Registering
	As a moderator
	I want to register courses
	So that I could sell them to my clients

Scenario: Successful course registering
Given I am at the course-register page
And I cannot see a course with the name "Finanças"
When I try to register a new course with the name "Finanças" with price "100"
Then I can see a course with the name "Finanças" in the courses list
