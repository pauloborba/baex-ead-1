Feature: Material download
     As a student
	   I want to download the class material
	   So I can have access to the class material offline

Scenario: Successful module material download
Given I’m at the “Cursos” page
And I select the bought course “Finanças”
And I select the first module
	When I try to download a study file
	Then The file is downloaded to my computer successfully
And I can see a confirmation message
