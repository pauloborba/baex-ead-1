Feature: Course purchase
     As a student
	   I want to buy courses
	   So that I could join the classes and read the materials

Scenario: Course successfully bought
Given I’m at the “available-courses” page
And I have “100” worth of credits in my wallet
When I try to buy the course “Gerência” with the price “50”
Then The course will be available at the my-courses page
And I will have “50” worth of credits remaining in my wallet
And I will receive an confirmation message

Scenario: Course already bought
Given I’m at the available-courses page
And I already have bought the course “Gerência”
When I try to find the course “Gerência”
Then The course won	‘t be available to be bought

Scenario: Insufficient wallet credit
Given I’m at the available-courses page
And I have “100” worth of credits in my wallet
When I try to buy the course “Gerência Avançada” with the price “200”
Then The course won’t be bought
And I will receive an error message saying that i don’t have sufficient credits
