Feature: insert bookmarks

Scenario: click button to insert bookmarks and insert success
   Given open the homepage
   When click the insert button
   And  open the insert modal
   Then input bookmarks name and address
   And click the save button
   Then insert success


Scenario: click button to insert bookmarks and insert failed
  Given open the homepage
  When click the insert button
  And  open the insert modal
  Then input bookmarks name and address
  And click the save button
  Then insert falied
