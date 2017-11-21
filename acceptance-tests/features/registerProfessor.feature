Feature: Professor registration
  As a moderator
  I want register new professors to the system
  So that they can have specialized access to the system’s functionalities

Scenario: Successful professor registering
Given I’m at the professor-register page
And I choose to register a professor
And There’s no professor with e-mail “def@gmail.com” registered
When I fill my data with the name “Paulo” and the e-mail “def@gmail.com” and try to register
Then The professor “Paulo” with e-mail “def@gmail.com” will be registered.
And I can see a confirmation message

Scenario: Duplicate e-mail error
Given I’m at the professor-register page
And I choose to register a professor
And There’s a professor with e-mail “def@gmail.com” already registered
When I fill my data with the name “Paulo” and the e-mail “def@gmail.com” and try to register
Then The professor “Paulo” with e-mail “def@gmail.com” won’t be registered.
And I can see a error message saying that the e-mail “def@gmail.com” is already registered

Scenario:Invalid e-mail error
Given I’m at the professor-register page
And I choose to register a professor
When I fill my data with the name “Paulo” and the e-mail “123” and try to register
Then The professor “Paulo” with e-mail “123” won’t be registered.
And I can see a error message saying that the e-mail “123” is invalid
