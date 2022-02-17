Feature: Create Exam

    Rule: All The information of the exam is required
    Rule: A student must exist to be assigned to an exam
    Rule: Only this courses are allowed:
        MATHS | SCIENCES | CHEMISTRY | ARTS | ECONOMICS | HISTORY | PHYSICS | COMPUTER_SCIENCE
    Rule: The scale of grades are from 0 to 10.


        Scenario: A user needs to include a new exam
            Given I am user
            When I create a new exam
            Then I see the this exam when I retrieve the list of exams

        Scenario: A user try to include a new exam with missing info
            Given I am user
            When I try to create a new exam with missing info
            Then I see an error

        Scenario: A user try to include a new exam for a no existing student
            Given I am user
            When I try to create a new exam for a non existing student
            Then I see an error
