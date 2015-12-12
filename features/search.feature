Feature: search bookmarks

Scenario: input keyword to search bookmarks
   Given open the homepage
   When click the search box
   And input the keyword
   Then show the all bookmarks that have keyword
   And show total count
