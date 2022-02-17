Feature: Check Nationality 
    The government needs to know the number of foreign students, but they are limited by law not to ask.
    They need to use this service to identify the nationality and should not save it in the student file:
        - https://api.nationalize.io/?name={name}


    Rule: Take the nationality with the biggest problability.
    Rule: If no nationality can be identified, by default is an inmigrant.
    Rule: The default country for inmigrants will be defined by Dan Mildon.

        Scenario: A user needs to know the the nationality of a student
            Given I am user
            When I ask for the nationality of a student
            Then I see the most problable nationality

        Scenario: A user needs to know the list of nationalities
            Given I am user
            When I ask for the nationalities of the students
            Then I see average of nationalities