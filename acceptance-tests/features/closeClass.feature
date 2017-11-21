Feature: Close class
    As a moderator
	  I would like to close the class
	  So that I can start a new class in the course

Scenario: Closing a class success
Given That the “Finanças” class was created
And I’m at the “Turmas” screen
When I close the current class on “Finanças”
Then A success message will appear

Scenario: Closing a class on system
Given That the “Finanças” course was created
And there is an active class on "Finanças"
When the current class on “Finanças” is closed
Then a new class for "Finanças” can be created
And there is no active class on "Finanças"
