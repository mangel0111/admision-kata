Feature: CRUD Students

    Rule: the name, address and age are the only values that can be modified.
    Rule: When a student is deleted, their exams should be deleted as well.

        Scenario: A user needs to update a student
            Given I am user
            When I update a student
            Then I see the new info when retrieve a student

        Scenario: A user needs to remove a student
            Given I am user
            When I remove a student
            Then I don't see this student anymore