Feature: Module Unlock
    As a owner
	I want my customers to unlock course modules only under certain conditions
	So that I can keep them paying.

Scenario: Successful module unlock
Given a student named "João" with cpf "000.000.000-00"
And a class named "Finanças-001" from a course named "Finanças"
And "João" is enrolled in the "Finanças-001" class of the "Finanças" course
And "João" is in day with his payment of the "Finanças" course
And the module "Introdução" of the "Finanças" course was set to be available "2" days ago
When "João" with cpf "000.000.000-00" tries to see the module "Introdução" of the "Finanças" course
Then "João" is redirected to the "Introdução" module page from the "Finanças" course

Scenario: Unsuccessful module unlock (time)
Given a student named "João" with cpf "000.000.000-00"
And a class named "Finanças-001" from a course named "Finanças"
And "João" is enrolled in the "Finanças-001" class of the "Finanças" course
And "João" is in day with his payment of the "Finanças" course
And the module "Introdução" of the "Finanças" course is set to be available "2" days from now
When "João" with cpf "000.000.000-00" tries to see the module "Introdução" of the "Finanças" course
Then "João" can see an error message