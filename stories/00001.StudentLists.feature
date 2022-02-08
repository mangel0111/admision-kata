Feature: Student Lists

    Rule: The information retrieved of users should only include the id, name and age.

        Scenario: A user needs to see the list of students
            Given I am user
            When I retrieve the students
            Then I see the list of students
