//Develop a SPA (minimum version 8)
//use API jsonplaceholder url https://jsonplaceholder.typicode.com
//The blog has a collection o posts
//A post has the properties: id, userId, title, body
//A post has comments
//A comments has the properties: id, postId, name, email, body
//create login page form (username, password, and login button)

/* A user to authenticate, and prevent unauthorized
users to navigate to other pages. For simplicity, login credentials can be hard-coded directly on the login service.*/

/* A page that shows the details of a Post including title, author name, body, and the list of the related comments. */ 

/* A form with a text area and a button at the bottom of the Post’s details page to allow the user to insert a new comment. The new
comment must be sent to the server using the right POST API and then added after the other comments. */

//REQUIREMENTS

/* 
- The layout must follow the one attached
- Use Flexbox for styling the application layout
- Use a loader indicator or the skeleton pattern to handle the loading state (e.g. data fetch via API)
- Handle error and empty states of API calls
- Use services to encapsulate the business logic of the application
- Code must be readable, reusable, and well documented 
*/

/*NICE TO HAVE (OPTIONAL)
Use one of the following UI libraries:
Angular Material (https://material.angular.io)
Ng-Bootstrap (https://ng-bootstrap.github.io)
In the Post details page, add an auto-generated avatar for the author of a comment using it’s initials
Add a “remember me” flag on the login page to keep the user logged in using cookies; the user should then be able to logout from the
Posts page. */