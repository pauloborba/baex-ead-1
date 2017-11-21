Feature: Student registration
  As a student
  I want to sign up
  So that I’ll have access to the system functionalities

Scenario: Successful student registering
Given I’m at the register page
And I choose to register as a student
And There’s no student with e-mail “abc@gmail.com” registered
When I fill my data with the name “Luca” and the e-mail “abc@gmail.com” and try to register
Then The student “Luca” with e-mail “abc@gmail.com” will be registered
And I can see a confirmation message

Scenario: Duplicate e-mail error
Given I’m at the register page
And I choose to register as a student
And There’s already a student with e-mail “abc@gmail.com” registered
When I fill my data with the name “Arthur” and the e-mail “abc@gmail.com” and try to register
Then The student “Arthur” with e-mail “abc@gmail.com” won’t be registered
And I can see a error message

Scenario: Invalid e-mail error
Given I’m at the register page
And I choose to register as a student
When I fill my data with the name “Sergio” and the e-mail “123” and try to register
Then The student “Sergio” with e-mail “123” won’t be registered
And I can see a error message
