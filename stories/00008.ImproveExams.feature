Feature: Improve Approval Rate
    To improve the approval rate, no student can be scored lower than 5.

    Rule: No exam can be scored in 0, the new minimum is 5.

        Scenario: A user needs to check the exams
            Given I am user
            When I retrieve the exams
            Then I see the that all exams are approved