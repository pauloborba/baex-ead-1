Feature: As a student
         I want to sign up
         So that I’ll have access to the system functionalities

Scenario: Successful student registering
Given There’s no student with e-mail “arthur@gmail.com” registered
Given I’m at the “Cadastro” page
When I try to register a student with e-mail “arthur@gmail.com” and password “123456”
Then I can see a confirmation message
