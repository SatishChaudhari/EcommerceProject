Feature: InfoNewsContact

  Scenario: Navigate pages from Info Pages
    Given Info Pages link display in main menu
    When User do mouse hover on InfoPages link in main menu on homepage
    And select About Us link
    Then  navigate to the About Us page
    And select Privacy policy link
    Then navigate to the Privacy Page


