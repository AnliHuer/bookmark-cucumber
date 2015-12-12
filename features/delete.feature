Feature: delete bookmarks

Scenario: click button to delete bookmarks and delete succcess
   Given open the homepage
   When click the delete button
   And  open the confirm
   And input the sure button
   Then delete success

Scenario: click button to delete bookmarks and delete failed
   Given open the homepage
   When click the delete button
   And  open the confirm
   And input the cancel button
   Then delete faild
