Feature: Calculate approval rate

    Rule: Should display all the courses, even when no exams created.
    Rule: When a course doesn't have exams to rate a "N/A" should be returned.
    Rule: The approval rate should be displayed as porcentages.
    Rule: The miminum aproval grade is 5.

        Scenario: A user needs to check the approval rate of a course
            Given I am user
            When I retrieve the approval rate of the courses
            Then I see the ths approval rate of the courses