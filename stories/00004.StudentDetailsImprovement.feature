Feature: Student Details Improvement

    Rule: The information retrieved of an student should include the score of their exams.

        Scenario: A user needs to see the details of a student
            Given I am user
            When I retrieve the details of a user
            Then I see the info of this user with the extra info
