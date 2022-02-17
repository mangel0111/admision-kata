Feature: CRUD Exams

    Rule: the score is the only value that can be modified.

        Scenario: A user needs to update a exam
            Given I am user
            When I update a exam
            Then I see the new info when retrieve the exam

        Scenario: A user needs to remove a exam
            Given I am user
            When I remove a exam
            Then I don't see this exam anymore