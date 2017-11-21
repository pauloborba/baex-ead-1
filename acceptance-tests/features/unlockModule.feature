Feature: Module unlock
     As a owner
	   I want my customers to unlock course modules only under certain conditions
	   So that I can keep them paying.
     
Scenario: Successful module unlock
     Given I’m a student at the “Finanças” course page
     And I’m in day with my payments
     And today is “12/11/2017”
     And the module “Introdução” is set to be available at “12/01/1900”
     	When I try to see the module “Introdução”
     	Then I’m redirected to the module page “Introdução” from the “Finanças” course

Scenario: Unsuccessful module unlock (too early)
     Given I’m a student at the “Finanças” course page
     And I’m in day with my payments
     And today is “12/11/2017”
     And the module “Introdução” is set to be available at “30/11/2017”
     	When I try to see the module “Introdução”
     	Then I can see a warning about the “Introdução” module release date

Scenario: Unsuccessful module unlock (payments not in day)
     Given I’m a student at the “Finanças” course page
     And I’m not in day with my payments
     And today is “12/11/2017”
     And the module “Introdução” is set to be available at “12/01/1900”
     	When I try to see the module “Introdução”
     	Then I can see a warning about my payments
