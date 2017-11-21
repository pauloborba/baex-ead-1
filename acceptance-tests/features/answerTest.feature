Feature:  Take test
      As a student
	    I want to answer a test
	    So that I can be evaluated by the professor

Scenario: Test answered successfully
Given That the teacher created a test for “Finanças” class
And I’m taking “Finanças” class
And I’m at test screen
When I fulfill all the answers
And I submit the test
Then A success pop-up will appear

Scenario: Test incomplete submit
Given That the teacher created a test for “Finanças” class
And I’m taking “Finanças” class
And I’m at test screen
When I don’t fulfill all the mandatory answers
And I submit the test
Then A failure pop-up will appear
