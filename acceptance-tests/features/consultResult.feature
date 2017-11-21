Feature: Consulting results
  As a student
  I want to see my tests results
  So that I’ll be aware of my income in the course

Scenario: View results
	Given I’m at the “Finanças” course page
	When I select the “Resultados” option
	Then I’m redirected to the results page
	And I can see my results on the “Finanças” course
