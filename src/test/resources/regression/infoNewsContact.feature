Feature: InfoNewsContact

  Scenario Outline: Navigate pages from Info Pages
    Given Open url
    When User do mouse over on InfoPages link in main menu on homepage
    And select option from "<Drop down>" list
    Then  navigate to the relevant page
    Examples:
      | Drop down      |
      | About Us       |
      | Privacy Policy |


