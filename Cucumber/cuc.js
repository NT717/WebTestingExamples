Given I am in registration page
And I provide below information during registration
   | firstName | Tom 
   | lastName  | Jerry 
   | phone     | 123456789
   | email     | tomandjerry@cartoon.com
When I submit this details
Then the registration should be successful