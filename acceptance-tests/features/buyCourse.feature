Feature: Course purchase
     As a student
	   I want to buy courses
	   So that I could join the classes and read the materials

Scenario: Course request
Given I'm logged in as a student named "Sergio" and with CPF "11194924409"
And I'm at the "available-courses" page
And I can see the course "Gerência"
And I haven't bought the course "Gerência"
When I request to buy the course "Gerência"
Then I will receive a message confirming that the request has been sent
