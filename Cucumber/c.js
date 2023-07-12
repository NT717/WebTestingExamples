Feature: Test input fields on a page
    As a developer
    I want to be able to test input fields on a certain page

Bacground:
    Given: I open the site "/"
    Then I expect that element "#testInput" not contains any text 

Senario: Set the content of a input field 
    When I set "test" to the inputfield "testInput" 
    Then I expect that element  "testInput" contains any text
    And I expect that element "testInput" contains any text "test"

Senario: Add content to a input field
    When I set "test" to the inputfield "#testInput"
    Then I expect that element contains any text
    When I add "more tests" to the inputfield "#testInput"
    Then I expect that element "#testInput" contains the text "test more tests"

Senario: Clear the content of a input field
    When I set "test" to the inputfield "#testInput"
    Then I expect that element "testInput" conatins any text
    And I expect that element "testInput" contains the text "test"
    When I clear the inputfield "#testInput"
    Then I expect that element "testInput " not contains any text

    