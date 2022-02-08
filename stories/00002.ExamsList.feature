Feature: Exams Lists

    Rule: The information retrieved of exams should only include the id, username and grade.

        Scenario: A user needs to see the list of exams
            Given I am user
            When I retrieve the exams
            Then I see the list of exams
