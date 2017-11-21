Feature: Material upload
     As a teacher
	   I want to upload extra material to the courses
	   So that I can help my students achieve their goals

Scenario: Successful file upload
	Given I’m at the “taught-courses” page
	And I select the course “Finanças”
	And There’s no material uploaded with the name “artigo1.pdf”
	When I try to send a file with the name “artigo1.pdf”
	Then the file is sent
	And I can see a confirmation message

Scenario: Duplicate file upload
	Given I’m at the “taught-courses” page
	And I select the course “Finanças”
	And There’s already a material uploaded with the name “artigo1.pdf”
	When I try to send a file with the name “artigo1.pdf”
	Then the file won’t be sent
	And I can see an error message saying that the file was already uploaded

Scenario: Corrupted file upload
	Given I’m at the “taught-courses” page
	And I select the course “Finanças”
	And There’s no material uploaded with the name “artigo1.pdf”
	When I try to send a file with the name “artigo1.pdf” that is corrupted
	Then the file won’t be sent
	And I can see an error message saying that the file is corrupted
