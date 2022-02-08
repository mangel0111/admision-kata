Feature: Student Details

    Rule: The information retrieved of an student should include the id, name, address, age.
    Rule: A user can only be retrieved by id.

        Scenario: A user needs to see the details of a student
            Given I am user
            When I retrieve the details of a user
            Then I see the info of this user
