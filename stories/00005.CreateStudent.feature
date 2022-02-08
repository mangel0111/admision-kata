Feature: Create Student

    Rule: All The information of the user is required

        Scenario: A user needs to include a new student
            Given I am user
            When I create a new user
            Then I see the this user when I retrieve the list of user

        Scenario: A user try to include a new student with missing info
            Given I am user
            When I try to create a new user with missing info
            Then I see an error
